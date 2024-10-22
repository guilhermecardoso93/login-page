import { UserRound, Mail, LockKeyhole } from "lucide-react";
import "./Login.css";

export const Login = () => {
  return (
    <div className="container">
      <header>
        <span>Sign Up</span>
        <div className="underline"></div>
      </header>{" "}
      <div className="inputs">
        <div className="input">
          <UserRound color="gray" size={16} />
          <input type="text" />
        </div>

        <div className="input">
          <Mail color="gray" size={16} />
          <input type="email" />
        </div>

        <div className="input">
          <LockKeyhole color="gray" size={16} />
          <input type="password" />
        </div>
      </div>
      <div className="forgot-password">
        Lost Password? <span>click here</span>
      </div>
      <div className="submit-container">
        <div className="submit">
          Sign Up
        </div>
        <div className="login">
          Login
        </div>
      </div>
    </div>
  );
};
