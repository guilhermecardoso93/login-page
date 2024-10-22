import { UserRound, Mail, LockKeyhole } from "lucide-react";
import "./Login.css";
import { useState } from "react";

export const Login = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <header>
        <span>{action}</span>
        <div className="underline"></div>
      </header>{" "}
      <div className="inputs">
        <div className="input">
          <UserRound color="gray" size={24} className="icon" />
          <input type="text" placeholder="Name"/>
        </div>

        <div className="input">
          <Mail color="gray" size={24} className="icon" />
          <input type="email" placeholder="E-mail" />
        </div>

        <div className="input">
          <LockKeyhole color="gray" size={24} className="icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password">
        Lost Password? <span>Click here</span>
      </div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="login">Login</div>
      </div>
    </div>
  );
};
