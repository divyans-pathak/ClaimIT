import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ClaimsList from "./pages/ClaimsList";
import SubmitClaim from "./pages/SubmitClaim";
import ClaimDetails from "./pages/ClaimDetails";

function App() {
  const isAuthenticated = !!localStorage.getItem("claimit_user");

  return (
    <div className="app">
      <Nav isAuthenticated={isAuthenticated} />
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/claims"
            element={
              isAuthenticated ? <ClaimsList /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/claims/new"
            element={
              isAuthenticated ? <SubmitClaim /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/claims/:id"
            element={
              isAuthenticated ? <ClaimDetails /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/"
            element={
              <Navigate to={isAuthenticated ? "/dashboard" : "/login"} />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
