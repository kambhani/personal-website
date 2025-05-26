import React from "react";
import ReactDOM from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import { ParallaxProvider } from "react-scroll-parallax";
import App from "./App.tsx";
import "./index.css";

// @ts-expect-error
window.global = globalThis;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </HeroUIProvider>
  </React.StrictMode>,
);
