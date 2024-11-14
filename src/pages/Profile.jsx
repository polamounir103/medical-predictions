import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="page">
      <h2 className="m-5">Profile</h2>

      <Link to="/edit-profile">
        <a className=" border border-sky-950 font-semibold px-10 py-5 text-center rounded-3xl">
          EDIT
        </a>
      </Link>
    </div>
  );
}

export default Profile;
