import React from "react";
import "./input.css";

function Input({ onChange }) {
  return (
    <div className="container">
      <h2>Enter the Post Id</h2>

      <div className="group">
        <input
          onChange={(e) => onChange(e.target.value)}
          type="number"
          required
        />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>Post Id</label>
      </div>
    </div>
  );
}

export default Input;
