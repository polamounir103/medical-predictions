import profileImg from "../assets/images/profile-image.jpg";
function EditProfile() {
  return (
    <div className="page">
      <div className="flex flex-col gap-20 px-2 md:px-10 lg:px-20 pt-10 pb-20">
        <div className="ps-5">
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
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold">Pola Mounir</h2>
                <p>User Type</p>
              </div>
            </div>
            <div className="self-center md:self-end flex gap-5 ">
              <button className="btn px-2 py-1 bg-black text-white font-semibold">
                Upload new picture
              </button>
              <button className="btn px-2 py-1 bg-rose-200 text-red-700 font-semibold ">
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
              <input
                type="text"
                className="px-3 py-2 rounded-md shadow-md focus:shadow-sky-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <p>Last Name</p>
              <input
                type="text"
                className="px-3 py-2 rounded-md shadow-md focus:shadow-sky-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <p>Email address</p>
              <input
                type="email"
                className="px-3 py-2 rounded-md shadow-md focus:shadow-sky-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <p>Phone Number</p>
              <input
                type="tel"
                className="px-3 py-2 rounded-md shadow-md focus:shadow-sky-500 focus:outline-none"
              />
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
              <input
                type="password"
                className="px-3 py-2 rounded-md shadow-md focus:shadow-sky-500 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <p>New Password</p>
                <input
                  type="password"
                  className="px-3 py-2 rounded-md shadow-md focus:shadow-sky-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <p>confirm Password</p>
                <input
                  type="password"
                  className="px-3 py-2 rounded-md shadow-md focus:shadow-sky-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="btn w-52 py-1 px-2 bg-emerald-500 text-white font-semibold "
          >
            Update changes
          </button>
          <button
            className="btn w-52 py-1 px-2 bg-gray-600 text-white font-semibold "
            onClick={() => {
              window.location.href = "/profile";
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
