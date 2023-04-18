import React, { Suspense } from "react";
import Routes from "./router";
import { LinearProgress } from "@mui/material";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Suspense fallback={<LinearProgress />}>
      <SideBar content={
        <Routes />} />
    </Suspense>
  );
}

export default App;
