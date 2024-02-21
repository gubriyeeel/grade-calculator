import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="h-full bg-gradient-to-t from-slate-600 to-slate-900 pb-8 overflow-x-hidden">
      <App />
      <Toaster />
    </div>
  </React.StrictMode>
);
