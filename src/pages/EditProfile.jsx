import profileImg from "../assets/images/profile-image.jpg";
function EditProfile() {
  return (
    <div className="page">
      <div className="flex flex-col gap-20 px-2 md:px-10 lg:px-20 pt-10 pb-20">
        <div>
          <h2 className="title">Edit Profile</h2>
          <p className="title-info">update your account information</p>
        </div>
        <div>
          <div className="flex flex-col md:flex-row gap-10 items-center justify-between border border-gray-400 py-5 px-10 md:py-14 md:px-16  rounded-lg">
            <div className="flex items-center gap-10">
              <img
                src={profileImg}
                alt=""
                className="w-32 aspect-square rounded-full"
              />
              <div>
                <h2>Pola Mounir</h2>
                <p>User Type</p>
              </div>
            </div>
            <div className="self-center md:self-end flex gap-5 ">
              <button className="btn bg-black text-white font-semibold">
                Upload new picture
              </button>
              <button className="btn bg-rose-200 text-red-700 font-semibold ">
                {" "}
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 justify-between border border-gray-400 py-5 px-10 md:py-14 md:px-16  rounded-lg">
          <div>
            <h2 className="title">Personal Information</h2>
            <p className="title-info">update your personal information</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <p>First Name</p>
              <input type="text" />
            </div>
            <div className="flex flex-col">
              <p>Last Name</p>
              <input type="text" />
            </div>
            <div className="flex flex-col">
              <p>Email address</p>
              <input type="email" />
            </div>
            <div className="flex flex-col">
              <p>Phone Number</p>
              <input type="tel" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 justify-between border border-gray-400 py-5 px-10 md:py-14 md:px-16  rounded-lg">
          <div>
            <h2 className="title">Change Password</h2>
            <p className="title-info">Your New Password must be differant</p>
          </div>
          <div className="flex flex-col gap-5 ">
            <div className="flex flex-col">
              <p>Current Password</p>
              <input type="password" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <p>New Password</p>
                <input type="password" />
              </div>
              <div className="flex flex-col">
                <p>confirm Password</p>
                <input type="password" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <button
            type="submit"
            className="btn bg-sky-600 text-white font-semibold "
          >
            Update changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
