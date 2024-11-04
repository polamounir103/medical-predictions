import { Link } from "react-router-dom";
import Baymax from "../../assets/images/forma.png";
function RegistrationForm() {
  return (
    <form className="registeration-form">
      <img src={Baymax} alt="" className="registration-form-img"/>
      <div className="registeration-form-container flex  flex-col justify-center items-center gap-8 ">
        <h2 className=" self-start text-xl lg:text-3xl">Create Account</h2>
        <div className="name-container w-full  flex flex-col sm:flex-row gap-5 ">
          <div className=" grow">
            <label htmlFor="First Name"> First Name</label>
            <input
              type="text"
              className="w-full registeration-form-container-input"
            />
          </div>
          <div className="grow flex ">
            <label htmlFor="Last Name"> Last Name</label>
            <input
              type="text"
              className="w-full registeration-form-container-input"
            />
          </div>
        </div>
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
            Create Account
          </button>
          <p className="mt-2">
            Already have an account ? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default RegistrationForm;
