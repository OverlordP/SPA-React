import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import {Dc , Marvel, Heroe} from "../pages/index";
import {Navbar} from  "../../UI/navbar"
import { Search } from "../pages/Search";




function HeroesRoutes() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/dc" />} />
        <Route path="/dc" element={<Dc />} />
        <Route path="/marvel" element={<Marvel />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/heroes/:id" element={<Heroe/>} />
      </Routes>
    </>

  );
}

export default HeroesRoutes;
