import React, { useState } from "react";
import Input from "./Input";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(form));
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f5f5f5",
      fontFamily: "sans-serif"
    }}>
      <div style={{
        background: "#fff",
        padding: "32px",
        borderRadius: "12px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "360px"
      }}>
        <h2 style={{ marginBottom: "24px", textAlign: "center" }}>
          {isLogin ? "Login" : "Register"}
        </h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <Input label="Username" type="text" value={form.username} onChange={handleChange} name="username" />
          )}
          <Input label="Email" type="email" value={form.email} onChange={handleChange} name="email" />
          <Input label="Password" type="password" value={form.password} onChange={handleChange} name="password" />

          <button type="submit" style={{
            width: "100%",
            padding: "11px",
            background: "#4f46e5",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "15px",
            cursor: "pointer",
            marginTop: "8px"
          }}>
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "16px", fontSize: "14px", color: "#666" }}>
          {isLogin ? "No account? " : "Have an account? "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            style={{ color: "#4f46e5", cursor: "pointer" }}
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;