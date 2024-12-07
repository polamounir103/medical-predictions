import { useEffect, useState } from "react";
// import { Bounce, toast } from "react-toastify";
import Baymax from "../assets/images/forma.png";
import { Link, useNavigate } from "react-router-dom";
// import Notify from "../components/ui/Notify";
import useNotify from "../hooks/useNotify";
function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const notify = useNotify();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      notify("Passwords do not match!", "error");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "https://be47-197-60-250-17.ngrok-free.app/health/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        notify(result.error || "Registration failed!", "error");
        return;
      }

      notify(result.message || "Registration successful!", "success");
      navigate("/login");
    } catch (error) {
      notify("Network error! Please try again.", "error");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmition = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Create a new user object
    const newUser = {
      Fname: formData.Fname,
      Lname: formData.Lname,
      username: formData.username,
      email: formData.email,
      password: formData.password, // Avoid storing plain passwords in production
    };

    // Retrieve existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Add the new user to the existing users array
    existingUsers.push(newUser);

    // Save the updated users array back to localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // alert("User registered successfully!");

    // Reset the form
    setFormData({
      Fname: "",
      Lname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    navigate("/login");
  };

      useEffect(() => {
        const loggedInUser =
          JSON.parse(sessionStorage.getItem("loggedInUser")) ||
          JSON.parse(localStorage.getItem("loggedInUser"));
        if (loggedInUser) {
          // Redirect to dashboard or any protected route
          navigate("/"); // Change this to your desired route
        }
      }, [navigate]);
  return (
    <>
      <div className="registeration-page relative">
        <div className="min-h-svh">
          <div className="registeration-page-content px-2 pb-64 lg:pb-0 ">
            <form className="registeration-form" onSubmit={handleSubmition}>
              <img
                src={Baymax}
                alt="Baymax"
                className="registration-form-img"
              />
              <div className="registeration-form-container flex flex-col justify-center items-center gap-8">
                <h2 className="self-start text-xl lg:text-3xl">
                  Create Account
                </h2>
                <div className="name-container w-full flex flex-col sm:flex-row gap-5">
                  <div className="grow">
                    <label htmlFor="registerFname">First Name</label>
                    <input
                      type="text"
                      id="registerFname"
                      className="w-full registeration-form-container-input"
                      value={formData.Fname}
                      name="Fname"
                      onChange={handleChange}
                      required
                      autoComplete="true"
                    />
                  </div>
                  <div className="grow flex">
                    <label htmlFor="registerLname">Last Name</label>
                    <input
                      type="text"
                      id="registerLname"
                      className="w-full registeration-form-container-input"
                      value={formData.Lname}
                      name="Lname"
                      onChange={handleChange}
                      required
                      autoComplete="true"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="registerUsername">Username</label>
                  <input
                    type="text"
                    id="registerUsername"
                    className="w-full registeration-form-container-input"
                    value={formData.username}
                    name="username"
                    onChange={handleChange}
                    required
                    autoComplete="true"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="registerEmail">Email</label>
                  <input
                    type="email"
                    id="registerEmail"
                    className="w-full registeration-form-container-input"
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                    required
                    autoComplete="true"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="registerPassword">Password</label>
                  <input
                    type="password"
                    id="registerPassword"
                    className="w-full registeration-form-container-input"
                    value={formData.password}
                    name="password"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="registerConfirmPassword">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="registerConfirmPassword"
                    className="w-full registeration-form-container-input"
                    value={formData.confirmPassword}
                    name="confirmPassword"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full">
                  <button
                    type="submit"
                    className="w-full"
                    disabled={loading}
                    style={{ opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? "Creating Account..." : "Create Account"}
                  </button>
                  <p className="mt-2">
                    Already have an account? <Link to="/login">Login</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div className="bottom-path bottom-0"></div>
        </div>
      </div>
    </>
  );
}

export default Register;
