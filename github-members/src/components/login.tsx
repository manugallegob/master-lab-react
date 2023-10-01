import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");


  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate("/list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
      <form
        onSubmit={handleNavigation}
        className="container input-group flex-column justify-content-center align-items-center"
      >
        <span className="fw-bold">Ingrese Usuario y Contraseña</span>
        <div>
          <div className="input-group mt-3">
            <label className="input-group-text">Username: </label>
            <input
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group mt-1">
            <label className="input-group-text">Password: </label>
            <input
              className="form-control"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="mt-2 btn btn-primary">Login</button>
      </form>
    </div>
  );
};
