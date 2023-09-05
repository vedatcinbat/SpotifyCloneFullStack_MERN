import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import axios from "axios";
function SearchNavbar({
  currentUser,
  setCurrentUser,
  setCurrentSong,
  searchQuery,
  onSearch,
}) {
  const navigate = useNavigate();
  const logout = () => {
    setCurrentUser();
    setCurrentSong();
    navigate("/");
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    onSearch(query);
  };

  return (
    <div className=" ml-[0.5%] w-[81%] top-0 fixed h-[12%] text-xl bg-[#181818] rounded-xl text-gray-300 flex justify-between items-center">
      <div class="searchBar">
        <div className="text-white bg-[#121212] flex justify-center items-center text-white p-2 ml-2 rounded-xl">
          <Search />
          <input
            className="bg-[#121212] text-white rounded-xl ml-3 p-4"
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="search"
          />
        </div>
      </div>
      <div class="rightDatas flex items-center mr-2">
        <div class="text1 text-black p-2 cursor-pointer text-lg text-center w-[12rem] bg-white rounded-xl mr-[2rem]">
          <div>Explore Premium</div>
        </div>
        <div class="text2 text-gray-300 p-2 cursor-pointer text-lg text-center w-[12rem] bg-black rounded-xl mr-[1rem]">
          <div>Install App</div>
        </div>
        <Link to="/userProfile">
          <div class="profileButton border rounded-[50%] overflow-hidden cursor-pointer">
            <div>
              <img className="w-[3rem] h-[3rem]" src={currentUser.userImg} />
            </div>
          </div>
        </Link>
        <div class="logoutButton">
          <button
            onClick={logout}
            className="bg-white text-black rounded-xl text-sm p-2 ml-4"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchNavbar;
