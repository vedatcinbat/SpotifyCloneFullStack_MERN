import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import MainPart from "../components/MainPart";
import BottomPlayer from "../components/BottomPlayer";
function AlbumDetail({
  currentUser,
  setCurrentUser,
  currentSong,
  setCurrentSong,
  albumDetail,
  setAlbumDetail,
}) {
  console.log(albumDetail);
  const [isCurrentSongValid, setIsCurrentSongValid] = useState(false);
  const changeCurrentSong = () => {
    setIsCurrentSongValid((prevVal) => !prevVal);
  };
  return (
    <>
      {albumDetail ? (
        <>
          <div className="flex flex-col justify-between h-[100vh] bg-black p-[0.1rem]  ">
            <div
              className={`mainCenter flex flex-row mb-[0.4rem]  w-[100%] h-[${
                isCurrentSongValid ? "78vh" : "100vh"
              }]`}
            >
              <Sidebar currentUser={currentUser} />
              <MainPart
                albumDetails="true"
                albumDetail={albumDetail}
                setAlbumDetail={setAlbumDetail}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                currentSong={setCurrentSong}
                setCurrentSong={setCurrentSong}
              />
            </div>

            {currentSong ? (
              <div className="mainBottom  text-black rounded-xl bg-gradient-to-r from-[#af2896] to-[#509bf5] rounded-xl h-[12vh]">
                <BottomPlayer currentSong={currentSong} />
              </div>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <>
          <div>There is no album details</div>
        </>
      )}
    </>
  );
}

export default AlbumDetail;
