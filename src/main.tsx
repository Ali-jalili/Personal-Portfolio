/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// The display font drives the hero name (text-mega). Preloading it lets the
// browser fetch it in parallel with the JS/CSS instead of waiting for the
// CSS to be parsed and discover the @font-face URL. `?url` resolves to the
// hashed asset path at build time.
import bricolageFontUrl from "./assets/fonts/Bricolage-Variable.woff2.woff2?url";

const fontPreload = document.createElement("link");
fontPreload.rel = "preload";
fontPreload.as = "font";
fontPreload.type = "font/woff2";
fontPreload.href = bricolageFontUrl;
document.head.appendChild(fontPreload);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
