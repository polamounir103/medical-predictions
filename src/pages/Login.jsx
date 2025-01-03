import { Link, useNavigate } from "react-router-dom";
import Baymax from "../assets/images/forma.png";
import { useEffect, useState } from "react";
import useNotify from "../hooks/useNotify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slice/userSlice";
function Login() {
  const notify = useNotify();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(formData);

  //   setLoading(true);
  //   try {
  //     const response = await fetch(
  //       "https://be47-197-60-250-17.ngrok-free.app/health/login/",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     );
  //     console.log(response);
  //     const result = await response.json();

  //     if (!response.ok) {
  //       notify(result.error || "Registration failed!", "error");
  //       return;
  //     }

  //     notify(result.message || "Registration successful!", "success");
  //     navigate("/");
  //   } catch (error) {
  //     notify("Network error! Please try again.", "error");
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const dispatch = useDispatch();
  //  const { loading, error } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resultAction = await dispatch(loginUser(formData));

    if (loginUser.fulfilled.match(resultAction)) {
      notify(resultAction.payload.message || "Login successful!", "success");
      navigate("/"); // Navigate after successful login
    } else {
      notify(resultAction.payload || "Login failed!", "error");
    }
  };

  const [formError , setFormError] = useState(null)
  const handleSubmition = (e) => {
    e.preventDefault();

    // Retrieve the users array from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user that matches the entered username/email
    const foundUser = users.find(
      (user) =>
        user.username === formData.username || user.email === formData.username
    );

    // Check if user exists and password matches
    if (foundUser && foundUser.password === formData.password) {
      // Save the logged-in user in sessionStorage or localStorage
      sessionStorage.setItem("loggedInUser", JSON.stringify(foundUser));

      // Optionally, redirect the user after login
      navigate("/"); // Replace "/dashboard" with your desired route

      // alert("Login successful!");
    } else {
      setFormError("Invalid username/email or password");
    }
  };

    useEffect(() => {
      const loggedInUser =
        JSON.parse(sessionStorage.getItem("loggedInUser")) ||
        JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser) {
        // Redirect to dashboard or any protected route
        navigate("/profile"); 
      }
    }, [navigate]);
  return (
    <>
      <div className="login-page relative">
        <div className="min-h-svh ">
          <div className="registeration-page-content px-2 pb-64 lg:pb-0 ">
            <form className="registeration-form" onSubmit={handleSubmition}>
              <img src={Baymax} alt="" className="registration-form-img" />
              <div className="registeration-form-container flex  flex-col justify-center items-center gap-8 ">
                <h2 className=" self-start text-xl lg:text-3xl">Login</h2>

                <div className="w-full">
                  <label htmlFor="loginUsername"> Username</label>
                  <input
                    id="loginUsername"
                    type="username"
                    className="w-full registeration-form-container-input"
                    name="username"
                    onChange={handleChange}
                    autoComplete="true"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="loginPassword"> Password</label>
                  <input
                    id="loginPassword"
                    type="password"
                    className="w-full registeration-form-container-input"
                    name="password"
                    onChange={handleChange}
                    autoComplete="false"
                  />
                </div>
                <div>
                  {formError && (
                    <div className="text-red-500 text-center">{formError}</div>
                  )}
                </div>
                <div className="w-full">
                  <button type="submit" className="w-full">
                    {loading ? "Logging in..." : "Login"}
                  </button>
                  <p className="mt-2">
                    Don't have account ? <Link to="/register">Register</Link>
                  </p>
                </div>
              </div>
            </form>
            {/* {isAuthenticated && <p>Welcome back!</p>} */}
          </div>
        </div>
        <div className="bottom-path bottom-0"></div>
      </div>
    </>
  );
}

export default Login;
