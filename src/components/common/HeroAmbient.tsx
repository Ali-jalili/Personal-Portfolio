/** @format */

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Color, ShaderMaterial, Vector2 } from "three";

const vertexShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  varying vec2 vUv;

  uniform vec2 uResolution;
  uniform float uTime;

  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorBg;
  uniform float uIntensity;

  float noise(vec2 p) {
    return sin(p.x * 1.7 + cos(p.y * 1.3))
         + sin(p.y * 1.9 - cos(p.x * 0.8));
  }

  void main() {
    vec2 uv =
      (vUv - 0.5) *
      vec2(uResolution.x / uResolution.y, 1.0);

    float t = uTime * 0.045;

    float f1 =
      noise(
        uv * 1.35 +
        vec2(t, t * 0.65)
      );

    float f2 =
      noise(
        uv * 2.0 +
        vec2(-t * 0.7, t * 0.35) +
        f1 * 0.3
      );

    float field =
      (f1 + f2) * 0.25 + 0.5;

    field =
      smoothstep(0.18, 0.9, field);

    /*
     * Our palette:
     * warm cream background
     * soft indigo accent
     * muted violet secondary
     */

    vec3 color =
      mix(
        uColorBg,
        uColorA,
        smoothstep(0.18, 0.58, field)
      );

    color =
      mix(
        color,
        uColorB,
        smoothstep(0.58, 0.9, field)
      );

    /*
     * Keep the center visible and
     * naturally fade the edges.
     */

    float radius = length(uv);

    float vignette =
      smoothstep(1.35, 0.3, radius);

    color *= vignette;

    /*
     * Very subtle grain to prevent
     * color banding.
     */

    float grain =
      fract(
        sin(
          dot(
            gl_FragCoord.xy,
            vec2(12.9898, 78.233)
          )
        ) * 43758.5453
      );

    color += (grain - 0.5) * 0.012;

    gl_FragColor =
      vec4(color * uIntensity, 1.0);
  }
`;

interface FieldProps {
  paused: boolean;
}

function Field({ paused }: FieldProps) {
  const materialRef = useRef<ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0,
      },

      uResolution: {
        value: new Vector2(1, 1),
      },

      /*
       * These values are intentionally
       * aligned with our light portfolio theme.
       */
      uColorA: {
        value: new Color("#6366F1"),
      },

      uColorB: {
        value: new Color("#8B5CF6"),
      },

      /*
       * IMPORTANT:
       * Not black like Aashir's version.
       * This should blend with our page background.
       */
      uColorBg: {
        value: new Color("#F8F7F4"),
      },

      uIntensity: {
        value: 0.34,
      },
    }),
    [],
  );

  useFrame((state, delta) => {
    if (paused || !materialRef.current) {
      return;
    }

    const uniforms = materialRef.current.uniforms;

    uniforms.uTime.value += delta;

    const { width, height } = state.size;

    if (
      uniforms.uResolution.value.x !== width ||
      uniforms.uResolution.value.y !== height
    ) {
      uniforms.uResolution.value.set(width, height);
    }
  });

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />

      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        depthTest={false}
        depthWrite={false}
        toneMapped={false}
        transparent={false}
      />
    </mesh>
  );
}

export default function HeroAmbient() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [inView, setInView] = useState(true);

  const [documentVisible, setDocumentVisible] = useState(
    typeof document === "undefined" ? true : !document.hidden,
  );

  /*
   * Stop rendering when Hero is outside
   * the viewport.
   */
  useEffect(() => {
    const element = wrapperRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.01,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * Stop rendering when the browser tab
   * is hidden.
   */
  useEffect(() => {
    const handleVisibilityChange = () => {
      setDocumentVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const active = inView && documentVisible;

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden"
      style={{
        contain: "strict",
        pointerEvents: "none",
      }}
    >
      <Canvas
        gl={{
          antialias: false,
          alpha: false,
          depth: false,
          stencil: false,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
        frameloop={active ? "always" : "never"}
        camera={{
          position: [0, 0, 1],
        }}
        flat
      >
        <Field paused={!active} />
      </Canvas>
    </div>
  );
}
