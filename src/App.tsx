import React from 'react';
import {Route, Routes} from "react-router";
import {Navigation} from "./components/Navigation/Navigation";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Navigation/>}>
        <Route index/>
      </Route>
    </Routes>
  );
}

export default App;
