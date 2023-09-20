import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@/context/theme-provider";
import App from "@/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
