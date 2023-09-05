import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { FavoriteBorder } from "@mui/icons-material";
function Sidebar({ message, currentUser, currentSong }) {
  return (
    <>
      {message ? (
        <div className="w-[20%] flex flex-col justify-between items-center mr-[0.3rem] bg-black rounded-xl text-white ">
          <div className="showMessage bg-[#181818] text-white w-full h-[25%] rounded-[1rem] flex justify-center items-center">
            <div className="messagePart">
              <div>{message}</div>
            </div>
          </div>
          <div className="footer bg-[#181818] w-[100%] text-white h-[74%] rounded-[1rem] flex flex-col justify-center items-center">
            <div className="line1 text-sm mb-1 flex jusify-start ">
              <div className="mr-2">Legal</div>
              <div className="mr-2">Privacy Center</div>
              <div className="mr-2">Privacy Policy</div>
            </div>
            <div className="line2 text-sm mb-1 flex jusify-start ">
              <div className="mr-2">Cookies</div>
              <div className="mr-2">About Ads</div>
              <div className="mr-2">Accessibility</div>
            </div>
            <div className="line3 text-sm mb-1 flex jusify-start ">
              <div>Cookies</div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="w-[20%] flex flex-col justify-between items-center mr-[0.3rem] bg-black rounded-xl text-white ">
            <div className="showMessage bg-[#181818] flex flex-col text-white w-full h-[25%] rounded-[1rem] items-center justify-center  ">
              <Link to="/">
                <div class="homeIcon flex items-center mb-2">
                  <div className="flex items-center mr-[1rem]">
                    <HomeIcon />
                  </div>
                  <div className="text-xl">Home</div>
                </div>
              </Link>
              <Link to="/search">
                <div class="searchIcon flex items-center  ">
                  <div className="flex items-center  mr-[1rem] ">
                    <SearchIcon />
                  </div>
                  <div className="text-xl">Search</div>
                </div>
              </Link>
            </div>
            <div className="footer bg-[#181818] w-[100%] text-white h-[74%] rounded-[1rem] flex flex-col p-2">
              <div class="header mb-[2rem] mt-[0.5rem]  bg-gray-800 text-gray-300 p-2 w-[10vh] text-center rounded-xl cursor-pointer ">
                Playlists
              </div>
              <div class="likedSongs w-full h-[4rem] flex items-center hover:bg-[#121212] cursor-pointer">
                <div class="hearthIcon h-[4rem] w-[4rem] bg-gradient-to-br from-[#5038a0] to-[#281c50] hover:from-pink-500 hover:to-yellow-500 flex items-center justify-center">
                  <FavoriteBorder />
                </div>
                <Link to="/likedsongs">
                  <div className="text ml-2 h-[3rem] flex flex-col justify-between ">
                    <div>Liked Songs</div>
                    <div>Playlist o {currentUser.likedSongs.length}</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Sidebar;
