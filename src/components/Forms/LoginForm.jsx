import { Link } from "react-router-dom";
import Baymax from "../../assets/images/forma.png";
function LoginForm() {
  return (
    <form className="registeration-form">
      <img src={Baymax} alt="" className="registration-form-img" />
      <div className="registeration-form-container flex  flex-col justify-center items-center gap-8 ">
        <h2 className=" self-start text-xl lg:text-3xl">Login</h2>

        <div className="w-full">
          <label htmlFor="Email"> Email</label>
          <input
            type="email"
            className="w-full registeration-form-container-input"
          />
        </div>
        <div className="w-full">
          <label htmlFor="Password"> Password</label>
          <input
            type="password"
            className="w-full registeration-form-container-input"
          />
        </div>
        <div className="w-full">
          <button type="submit" name="" id="" className="w-full">
            Login
          </button>
          <p className="mt-2">
            Don't have account ? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
