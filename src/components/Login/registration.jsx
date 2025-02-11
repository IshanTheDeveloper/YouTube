import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const navigate = useNavigate();

  const handleRegistration = async () => {
    try {
      // Generate Token
      const tokenResponse = await axios.post(
        "http://localhost:4000/generateToken",
        { email }
      );
      const token = tokenResponse.data.token;

      // Register User
      const userRegistration = { firstname, lastname, email, password };

      await axios.post(
        "http://localhost:4000/saveUserInformation",
        userRegistration,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("User registered successfully. Redirecting to login...");
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Failed to register user.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-info">
          <img
            src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
            alt=""
          />
          <h1>Register</h1>
          <p>Register to continue to the platform.</p>
        </div>
        <div className="login-details1">
          <div className="login-details-name">
            <input
              type="text"
              placeholder="Firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Email or phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login-submit-button1">
            <button onClick={handleRegistration}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
