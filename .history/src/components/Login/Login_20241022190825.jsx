import { Camera } from "lucide-react";
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
          <Camera color="red" size={48} />
          <input type="text" />
        </div>
        <div className="input">
          <input type="email" />
        </div>
        <div className="input">
          <input type="password" />
        </div>
      </div>
    </div>
  );
};
