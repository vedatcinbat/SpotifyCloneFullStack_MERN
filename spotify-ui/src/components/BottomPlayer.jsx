import React from "react";
import { Close } from "@mui/icons-material";
function BottomPlayer({ currentSong, setCurrentSong }) {
  return (
    <>
      {currentSong ? (
        <div className="p-2 flex justify-between mt-1 ml-3">
          <div className="textPart">
            <div className="text-[#ffffffb3] text-md">{currentSong.title}</div>
            <div className="text-[#ffffffb3] text-md">
              {currentSong.duration}
            </div>
            <div className="text-[#ffffffb3] text-md">
              {currentSong.artist.artistname}
            </div>
          </div>
          <div
            onClick={() => setCurrentSong()}
            class="removeSong cursor-pointer"
          >
            <Close />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default BottomPlayer;
