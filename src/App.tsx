import React from 'react';
import {Route, Routes} from "react-router";
import {Navigation} from "./components/Navigation/Navigation";
import {Help} from "./components/Help/Help";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Help/>}/>
      </Route>
    </Routes>
  );
}

export default App;
