import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
} from "react-router-dom";
import "./index.css";
import App from './App';
import { RecoilRoot } from 'recoil'



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
      {/* important */}
        <App/>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
