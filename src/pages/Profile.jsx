import { Link } from "react-router-dom"

function Profile() {
  return (
    <div className="page">
        Profile
        <Link to='/edit-profile' >
        <button>EDIT</button>
        </Link>
    </div>
  )
}

export default Profile