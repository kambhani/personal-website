import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { ParallaxProvider } from "react-scroll-parallax";
import App from "./App.tsx";
import "./index.css";

// @ts-expect-error
window.global = globalThis;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </NextUIProvider>
  </React.StrictMode>,
);
