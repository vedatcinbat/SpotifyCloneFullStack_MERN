import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainPartNavbar from "../components/MainPartNavbar";
import Sidebar from "../components/Sidebar";
import MainPart from "../components/MainPart";
import BottomPlayer from "../components/BottomPlayer";
import LikedSongsHeader from "../components/LikedSongsHeader";

function LikedSongs({
  currentUser,
  currentSong,
  setCurrentSong,
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
      <div className="flex flex-col justify-between h-[100vh] bg-black p-[0.1rem]  ">
        <div
          className={`mainCenter flex flex-row mb-[0.4rem]  w-[100%] h-[${
            isCurrentSongValid ? "78vh" : "100vh"
          }]`}
        >
          <Sidebar currentUser={currentUser} />
          <MainPart
            likedSongs="true"
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            currentSong={setCurrentSong}
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
  );
}

export default LikedSongs;

{
  /* <Link to="/">Homepage</Link>
   */
}
