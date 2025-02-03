import { useNavigate } from "react-router-dom";
import AfterHeader from "../AfterHeader/afterheader";
import "./login.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleClick() {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill all the empty spaces");
    } else {
      localStorage.setItem("profileName", email); // Save the email in localStorage
      navigate("/home-page");
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-info">
          <img
            src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
            alt=""
          />
          <h1>Sign in</h1>
          <p>
            with your Google Account to continue to YouTube. This account will
            be available to other Google apps in the browser.
          </p>
        </div>
        <div className="login-details">
          <input
            type="text"
            placeholder="Email or phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3>Forgot email?</h3>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h3>Forgot password?</h3>
          <p>
            Not your computer? Use Guest mode to sign in privately.
            <a href="https://support.google.com/chrome/answer/6130773?hl=en">
              Learn more about using Guest mode
            </a>
          </p>
          <div className="login-submit-button">
            <button onClick={handleClick}>Login</button>
          </div>
        </div>
      </div>

      <div className="login-page-help">
        <div className="language-select">
          <select>
            <option value="en">English (United States)</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            {/* Add more languages as needed */}
          </select>
        </div>
        <div className="help-items">
          <p>Help</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>

      <div className="props-handling">
        <AfterHeader name={email} />
      </div>
    </div>
  );
}

export default Login;
