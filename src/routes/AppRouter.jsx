import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";


const AppRouter = () =>{
  return (
    <Router>
      <Routes>
        <Route>
          <Route path={"/"} element={<Home/>} />
          <Route path={"*"} element={<ErrorPage/>} />
          <Route path={"/:id"} element={<div>nada</div>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
