import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      const res = await axios.post(
        "https://user-management-authentication-api.onrender.com/api/auth/register",
        {
          email,
          password,
        }
      );

      alert(res.data.message || "Registration Successful");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <p>Create your account</p>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={register}>Register</button>

      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Register;