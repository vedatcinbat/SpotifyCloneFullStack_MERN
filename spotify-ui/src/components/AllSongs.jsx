import React, { useEffect, useState } from "react";
import SongBox from "./SongBox";
import axios from "axios";

function AllSongs({
  songs,
  currentUser,
  setCurrentSong,
  setCurrentUser,
  setAlbumDetail,
}) {
  return (
    <>
      {songs ? (
        <div className="bg-black">
          <div className="text-white">
            <div class="header p-4 text-xl font-bold">
              <div>Popular Songs</div>
            </div>
            <div class="songs p-4 grid grid-cols-5 gap-4">
              {songs.map((song) => {
                return (
                  <SongBox
                    setCurrentUser={setCurrentUser}
                    currentUser={currentUser}
                    songInfo={song}
                    setCurrentSong={setCurrentSong}
                    setAlbumDetail={setAlbumDetail}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <>Songs are downloading</>
      )}
    </>
  );
}

export default AllSongs;
