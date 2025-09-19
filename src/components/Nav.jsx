import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Nav({ isAuthenticated }) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("claimit_user");
    navigate("/login");
  }

  return (
    <nav className="nav">
      <div className="brand">ClaimIt</div>
      <div className="links">
        {isAuthenticated ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/claims">Claims</Link>
            <Link to="/claims/new">Submit</Link>
            <button className="link-button" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
