import React from "react";
import { Link, redirect } from "react-router-dom";
import LikedSongsHeader from "./LikedSongsHeader";
import { useNavigate } from "react-router-dom";

function MainPartNavbar({
  currentUser,
  setCurrentUser,
  likedSongs,
  setCurrentSong,
  setAlbumDetail,
}) {
  const navigate = useNavigate();
  const logout = () => {
    setCurrentUser();
    setCurrentSong();
    likedSongs = "";
    navigate("/");
    setAlbumDetail();
  };
  return (
    <>
      {likedSongs !== "true" ? (
        <div className="w-[100%] h-[12%] text-xl bg-[#181818] rounded-xl text-gray-300 flex justify-end items-center">
          {currentUser ? (
            <>
              <div class="leftDatas flex items-center mr-2">
                <div class="text1 text-black p-2 cursor-pointer text-lg text-center w-[12rem] bg-white rounded-xl mr-[2rem]">
                  <div>Explore Premium</div>
                </div>
                <div class="text2 text-gray-300 p-2 cursor-pointer text-lg text-center w-[12rem] bg-black rounded-xl mr-[1rem]">
                  <div>Install App</div>
                </div>
                <Link to="/userProfile">
                  <div class="profileButton border rounded-[50%] overflow-hidden cursor-pointer">
                    <div>
                      <img
                        className="w-[3rem] h-[3rem]"
                        src={currentUser.userImg}
                      />
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
            </>
          ) : (
            <div className="buttons mr-4 flex flex-row items-center rounded-xl">
              <div className="w-[0.2rem] rounded-2xl mr-4 h-[2rem] bg-white"></div>
              <Link to="/signup">
                <button className="mr-4  hover:text-white ">Sign up</button>
              </Link>
              <Link to="/login">
                <button className="bg-white hover:bg-[#18ad4d] hover:text-white p-3 w-[8rem] text-gray-800 rounded-[2rem] text-black font-bold">
                  Log in
                </button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        // #5018f0  #5038a0
        <div className="w-[100%] h-[12%] text-xl bg-gradient-to-b from-[#5038a0] to-[#5038a0] rounded-rt-xl rounded-lt-xl text-gray-300 flex justify-end items-center">
          {currentUser ? (
            <>
              <div class="leftDatas flex items-center mr-2">
                <div class="text1 text-black p-2 cursor-pointer text-lg text-center w-[12rem] bg-white rounded-xl mr-[2rem]">
                  <div>Explore Premium</div>
                </div>
                <div class="text2 text-gray-300 p-2 cursor-pointer text-lg text-center w-[12rem] bg-black rounded-xl mr-[1rem]">
                  <div>Install App</div>
                </div>
                <Link to="/userProfile">
                  <div class="profileButton rounded-full overflow-hidden cursor-pointer">
                    <div>
                      <img
                        className="w-[3rem] h-[3rem] rounded-full"
                        src={currentUser.userImg}
                      />
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
            </>
          ) : (
            <div className="buttons mr-4 flex flex-row items-center rounded-xl">
              <div className="w-[0.2rem] rounded-2xl mr-4 h-[2rem] bg-white"></div>
              <Link to="/signup">
                <button className="mr-4  hover:text-white ">Sign up</button>
              </Link>
              <Link to="/login">
                <button className="bg-white hover:bg-[#18ad4d] hover:text-white p-3 w-[8rem] text-gray-800 rounded-[2rem] text-black font-bold">
                  Log in
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default MainPartNavbar;
