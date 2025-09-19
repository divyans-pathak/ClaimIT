import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/mockApi";

export default function ClaimDetails() {
  const { id } = useParams();
  const [claim, setClaim] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const c = api.get(id);
    if (!c) navigate("/claims");
    setClaim(c);
  }, [id]);

  if (!claim) return null;

  function updateStatus(status) {
    api.update(id, { status });
    setClaim(api.get(id));
  }

  return (
    <div className="page claim-details-page">
      <h2>Claim #{claim.id}</h2>
      <div className="card">
        <p>
          <strong>Title:</strong> {claim.title}
        </p>
        <p>
          <strong>Amount:</strong> ${claim.amount}
        </p>
        <p>
          <strong>Description:</strong> {claim.description}
        </p>
        <p>
          <strong>Status:</strong> {claim.status}
        </p>
        <div className="actions">
          <button onClick={() => updateStatus("approved")}>Approve</button>
          <button onClick={() => updateStatus("rejected")}>Reject</button>
        </div>
      </div>
    </div>
  );
}
