import React from "react";
import { Link } from "react-router-dom";

function UserProfile({ currentUser }) {
  console.log(currentUser);
  return (
    <>
      <div>UserProfile</div>
      <div>{currentUser.username}</div>
      <div>{currentUser.password}</div>
      <div>{currentUser.age}</div>
      <div>{currentUser.country}</div>
      <div>{currentUser.college}</div>

      {/* {currentUser.username}
      {currentUser.password}
      {currentUser.age}
      {currentUser.country}
      {currentUser.email}
      {currentUser.likedSongs} */}
      <Link to="/">
        <div className="bg-red-600 text-white p-2 rounded-lg w-[20vh] text-center">
          Homepage
        </div>
      </Link>
    </>
  );
}

export default UserProfile;
