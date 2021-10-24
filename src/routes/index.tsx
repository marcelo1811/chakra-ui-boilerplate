import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import React from "react";
import { BrowserRouter } from "react-router-dom";

export function Routes() {
  const isAuthenticated = false;
  
  return (
    <BrowserRouter>
      {isAuthenticated
      ? <AppRoutes />
      : <AuthRoutes />}
    </BrowserRouter>
  )
}