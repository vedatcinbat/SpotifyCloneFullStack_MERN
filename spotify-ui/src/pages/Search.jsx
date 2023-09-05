import React, { useState } from "react";
import { Link } from "react-router-dom";
import BottomPartSignup from "../components/BottomPartSignup";
import MainPart from "../components/MainPart";
import Sidebar from "../components/Sidebar";
import BottomPlayer from "../components/BottomPlayer";
import SearchMain from "../components/SearchMain";

function Search({
  currentSong,
  setCurrentSong,
  currentUser,
  setCurrentUser,
  albumDetail,
  setAlbumDetail,
}) {
  const [isCurrentSongValid, setIsCurrentSongValid] = useState(false);
  const changeCurrentSong = () => {
    setIsCurrentSongValid((prevVal) => !prevVal);
  };
  return (
    <>
      {currentUser ? (
        <>
          <div className="flex flex-col justify-between h-[100vh] bg-black p-[0.1rem] ">
            <div
              className={`mainCenter flex flex-row mb-[0.4rem]  w-[100%] h-[${
                isCurrentSongValid ? "78vh" : "100vh"
              }]`}
            >
              <Sidebar currentUser={currentUser} />
              <SearchMain
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                albumDetail={albumDetail}
                setAlbumDetail={setAlbumDetail}
              />
            </div>
            {currentSong ? (
              <div className="mainBottom  text-black rounded-xl bg-gradient-to-r from-[#af2896] to-[#509bf5] rounded-xl h-[12vh]">
                <BottomPlayer
                  currentSong={currentSong}
                  setCurrentSong={setCurrentSong}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-between h-[100vh] bg-black p-[0.1rem] ">
          <div className="mainCenter flex flex-row mb-[0.4rem]  w-[100%] h-[88vh]">
            <Sidebar message="Login or Signup" />
            <MainPart
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              message="Login or Signup"
            />
          </div>
          <div className="mainBottom  text-black rounded-xl bg-gradient-to-r from-[#af2896] to-[#509bf5] rounded-xl h-[12vh]">
            <BottomPartSignup />
          </div>
        </div>
      )}
    </>
  );
}

export default Search;
