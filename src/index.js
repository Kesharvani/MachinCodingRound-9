import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { VideoContextProvider } from "./VideoContext";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <VideoContextProvider>
        <App />
      </VideoContextProvider>
    </BrowserRouter>
  </StrictMode>
);
