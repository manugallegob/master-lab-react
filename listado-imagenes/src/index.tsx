import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const containerRoot = document.getElementById("root");
const root = createRoot(containerRoot);

root.render(<App />);

