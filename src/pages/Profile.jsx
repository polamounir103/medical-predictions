import { Link } from "react-router-dom";
import profileImg from "../assets/images/profile-image.jpg";

function Profile() {
  return (
    <div className="page">
      <div className="">
        <div className="flex flex-col gap-20 px-2 md:px-10 lg:px-20 pt-10 pb-20">
          <div className="ps-5">
            <h2 className="title">My Profile</h2>
            <p className="title-info">Your account information</p>
          </div>
          <div>
            <div className="flex flex-col md:flex-row md:gap-10 lg:items-center lg:justify-between border border-gray-400 py-5 px-10 md:py-14 md:px-16  rounded-lg">
              <div className="flex items-center gap-10">
                <img
                  src={profileImg}
                  alt=""
                  className="w-32 aspect-square rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold">Pola Mounir</h2>
                  <p>User Type</p>
                </div>
              </div>
              <div className="self-end">
                <Link to="/edit-profile">
                  <button className="btn px-2 py-1 bg-emerald-600 text-white font-semibold">
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 justify-between border border-gray-400 py-5 px-10 md:py-14 md:px-16  rounded-lg">
            <div>
              <h2 className="title">Personal Information</h2>
              <p className="title-info">Here some personal info</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="flex flex-col">
                <h2 className="text-xl font-bold">Name</h2>
                <h3 className="text-lg font-medium ps-2">Pola Mounir</h3>
              </div>

              <div className="flex flex-col">
                <h2 className="text-xl font-bold">Email address</h2>
                <h3 className="text-lg font-medium ps-2">pola@gmail.com</h3>
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl font-bold">Phone Number</h2>
                <h3 className="text-lg font-medium ps-2">01234567890</h3>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Link to="/">
              <button className="btn bg-red-600 text-white border border-sky-950 font-semibold w-52 px-10 py-3 text-center rounded-3xl">
                Logout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
