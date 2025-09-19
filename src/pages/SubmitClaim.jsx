import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/mockApi";

export default function SubmitClaim() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    const newClaim = api.create({ title, amount, description });
    navigate(`/claims/${newClaim.id}`);
  }

  return (
    <div className="page submit-page">
      <h2>Submit Claim</h2>
      <form onSubmit={submit} className="card">
        <label>Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
