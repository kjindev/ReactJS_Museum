import React from "react";
import Home from "./Home";
import Root from "./Root";
import NowDetail from "./NowDetail";
import PrevDetail from "./PrevDetail";
import Map from "./Map";
import NotFound from "./NotFound";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "NowDetail",
        element: <NowDetail />,
      },
      {
        path: "PrevDetail",
        element: <PrevDetail />,
      },
      {
        path: "Map/:index",
        element: <Map />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
