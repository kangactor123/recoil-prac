import React from "react";
import App from "./App";
import * as ReactDOMClient from "react-dom/client";
import { RecoilRoot } from "recoil";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
