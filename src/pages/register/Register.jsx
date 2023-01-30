import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
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
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Passwort" />
            <input type="text" placeholder="Name" />
          </form>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
