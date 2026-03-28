import React from "react";

function Input({ label, type, value, onChange, name }) {
  return (
    <div style={{ marginBottom: "16px", textAlign: "left" }}>
      <label style={{ display: "block", marginBottom: "6px", fontSize: "14px" }}>{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "10px 12px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          fontSize: "14px",
          outline: "none",
        }}
      />
    </div>
  );
}

export default Input;