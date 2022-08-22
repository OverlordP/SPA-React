import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import HeroesRoutes from "../heroes/routes/HeroesRoutes.jsx";
import Login from "../auth/pages/Login.jsx";

function AppRoutes() {
  return (
    <>   
      <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes> 
      </div>
    </>
  );
}

export default AppRoutes;
