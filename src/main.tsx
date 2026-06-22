import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as SonnerToaster } from "sonner";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
    <SonnerToaster position="top-center" richColors closeButton />
  </HelmetProvider>
);
