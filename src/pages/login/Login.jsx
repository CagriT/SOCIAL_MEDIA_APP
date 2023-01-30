import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>
            Hello <br /> World.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            voluptatem nulla, earum sunt unde doloribus! Fugiat, exercitationem.
            Facilis, porro nemo.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Passwort" />
          </form>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
