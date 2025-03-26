import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = "https://frontend-take-home-service.fetch.com";
//in the app.css is where i imported the fontawesome icons
function Login() {
  useEffect(() => {
    document.body.classList.add("login-background"); //adding unique background color
    return () => {
      document.body.classList.remove("login-background");
    };
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await axios.post(
        `${BASE_URL}/auth/login`,
        { name, email },
        { withCredentials: true }
      );
      navigate("/search"); // Redirect to search page
    } catch (err) {
      setError("Login failed. Try again.");
    }
  };

  return (
    <div className="login-outer-container">
      <h2 className="one">
        Please login to find your new{" "}
        <i id="title-paw" className="fas fa-paw"></i> Pal friend!
      </h2>
      <div className="login-container">
        {/* <h2 className="two">Login</h2> */}
        <div className="animation-dog">
          <div className="dog">
            <div className="dog__paws">
              <div className="dog__bl-leg leg">
                <div className="dog__bl-paw paw"></div>
                <div className="dog__bl-top top"></div>
              </div>
              <div className="dog__bl-leg leg-br">
                <div className="dog__bl-paw paw"></div>
                <div className="dog__bl-top top"></div>
              </div>
              <div className="dog__fl-leg leg">
                <div className="dog__fl-paw paw"></div>
                <div className="dog__fl-top top"></div>
              </div>
              <div className="dog__fr-leg leg">
                <div className="dog__fr-paw paw"></div>
                <div className="dog__fr-top top-right"></div>
              </div>
            </div>
            <div className="dog__body">
              <div className="dog__tail"></div>
            </div>
            <div className="dog__head">
              <div className="dog__snout">
                <div className="dog__nose"></div>
                <div className="dog__eyes">
                  <div className="dog__eye-l"></div>
                  <div className="dog__eye-r"></div>
                </div>
              </div>
            </div>
            <div className="dog__head-c">
              <div className="dog__ear-l"></div>
              <div className="dog__ear-r"></div>
            </div>
          </div>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            className="login-name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="login-email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button className="submit-button" type="submit">
            Login <i className="fas fa-paw"></i>
          </button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default Login;
