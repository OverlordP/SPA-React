import React from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Login from '../pages/Login'
function AuthRoutes() {
  return (
    <>
      <Routes>
      <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default AuthRoutes