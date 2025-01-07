import { render } from "preact";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router.tsx";
import { RecoilRoot } from "recoil";
import { Suspense } from "preact/compat";

render(
  <RecoilRoot>
  <BrowserRouter>
    <Suspense fallback={<div className={"main__loading"}>Cargado mascotas...</div>} >
    <Router />
  </Suspense>
  </BrowserRouter>
  </RecoilRoot>,
  document.getElementById("app")!
);
