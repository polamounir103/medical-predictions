import { useNavigate } from "react-router-dom";
import profileImg from "../assets/images/profile-image.jpg";
import { useEffect, useState } from "react";

function EditProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const loggedInUser =
      JSON.parse(sessionStorage.getItem("loggedInUser")) ||
      JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
      setUser(loggedInUser);
      setFormData({
        firstName: loggedInUser.Fname,
        lastName: loggedInUser.Lname,
        email: loggedInUser.email,
        username: loggedInUser.username,
      });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate if the passwords match
    if (formData.newPassword !== formData.confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }

    // Here, you can handle updating the user information
    const updatedUser = {
      ...user,
      Fname: formData.firstName,
      Lname: formData.lastName,
      email: formData.email,
      username: formData.username,
      password: formData.newPassword || user.password, // Update password if new password provided
    };
    let onlineUser = user;

    sessionStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex(
      (u) => u.username === onlineUser.username
    );

    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      localStorage.setItem("users", JSON.stringify(users));
    }

    alert("Profile updated successfully!");


    navigate("/profile");
  };

  return (
    <div className="page">
      <div className="flex flex-col gap-20 px-2 md:px-10 lg:px-20 pt-10 pb-20">
        <div className="ps-5">
          <h2 className="title">Edit Profile</h2>
          <p className="title-info">Update your account information</p>
        </div>
        <div>
          <div className="flex flex-col md:flex-row gap-10 items-center justify-between border border-gray-400 py-5 px-10 md:py-14 md:px-16 rounded-lg">
            <div className="flex items-center gap-10">
              <img
                src={profileImg}
                alt=""
                className="w-32 aspect-square rounded-full"
              />
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold">
                  {user.Fname} {user.Lname}
                </h2>
                <p>User Type</p>
              </div>
            </div>
            <div className="self-center md:self-end flex gap-5">
              <button className="btn px-2 py-1 bg-black text-white font-semibold">
                Upload new picture
              </button>
              <button className="btn px-2 py-1 bg-rose-200 text-red-700 font-semibold">
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 justify-between border border-gray-400 py-5 px-10 md:py-14 md:px-16 rounded-lg">
          <div>
            <h2 className="title">Personal Information</h2>
            <p className="title-info">Update your personal information</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <p>First Name</p>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="px-3 py-2 rounded-md shadow-md focus:shadow-sky-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <p>Last Name</p>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="px-3 py-2 rounded-md shadow-md focus:shadow-sky-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <p>Email Address</p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="px-3 py-2 rounded-md shadow-md focus:shadow-sky-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <p>Username</p>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="px-3 py-2 rounded-md shadow-md focus:shadow-sky-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 justify-between border border-gray-400 py-5 px-10 md:py-14 md:px-16 rounded-lg">
          <div>
            <h2 className="title">Change Password</h2>
            <p className="title-info">Your new password must be different</p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <p>Current Password</p>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className="px-3 py-2 rounded-md shadow-md focus:shadow-sky-500 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <p>New Password</p>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="px-3 py-2 rounded-md shadow-md focus:shadow-sky-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <p>Confirm Password</p>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="px-3 py-2 rounded-md shadow-md focus:shadow-sky-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn w-52 py-1 px-2 bg-emerald-500 text-white font-semibold"
          >
            Update Changes
          </button>
          <button
            className="btn w-52 py-1 px-2 bg-gray-600 text-white font-semibold"
            onClick={() => navigate("/profile")}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
