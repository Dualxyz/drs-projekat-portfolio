import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <div>Email: {user.data.email}</div>
      <br></br>
      <div>First name: {user.data.firstName}</div>
      <div>Last name: {user.data.lastName}</div>
      <br></br>
      <div>Address: {user.data.address}</div>
      <div>City: {user.data.city}</div>
      <div>Country: {user.data.country}</div>
      <div>Phone: {user.data.phone}</div>
      <br></br>
      <br></br>

      <Link to="/profile/edit">Edit profile</Link>
    </div>
  );
};

export default Profile;
