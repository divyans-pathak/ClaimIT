import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/mockApi";

export default function ClaimsList() {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    setClaims(api.getAll());
  }, []);

  function remove(id) {
    api.remove(id);
    setClaims(api.getAll());
  }

  return (
    <div className="page claims-page">
      <h2>Claims</h2>
      <div className="card">
        <Link to="/claims/new" className="button">
          New Claim
        </Link>
        {claims.length === 0 ? (
          <p>No claims yet.</p>
        ) : (
          <table className="claims-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {claims.map((c) => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>
                    <Link to={`/claims/${c.id}`}>{c.title}</Link>
                  </td>
                  <td>{c.status}</td>
                  <td>
                    <button onClick={() => remove(c.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
