import React from "react";
import { Link } from "react-router-dom";

function AlbumDetailHeader({ albumDetail }) {
  console.log(albumDetail);
  return (
    <>
      {albumDetail ? (
        <div className="bg-gradient-to-b from-[#5038a0] to-[#281c50] h-[40vh] relative pl-[6vh] overflow-hidden flex items-center">
          <div className="playList__box w-[35vh]">
            <img
              src={albumDetail.albumImg}
              alt=""
              className="rounded-[2.5vh]"
            />
          </div>
          <div className="playList__header ml-[5vh]">
            <div className="font-bold text-white text-[3.5vh]">Album</div>
            <div className="font-bold text-white text-[7.5vh] mb-4">
              {albumDetail.album_title}
            </div>
            <div className="playList__headerProfile flex justify-start items-center gap-2">
              <div className="profileImg cursor-pointer">
                <img
                  src={albumDetail.album_artists[0].artist_img}
                  className="w-[5vh] h-[5vh] rounded-full"
                  alt=""
                />
              </div>

              <div className="profileName ml-2 text-[#fff] font-bold">
                <div>{albumDetail.album_artists[0].artistname}</div>
              </div>
              <div className="circle w-[1vh] h-[1vh] bg-white rounded-full flex items-center justify-center ml-1 mr-1"></div>
              <div className="profileName text-[#fff]">
                <div>{albumDetail.publishYear}</div>
              </div>
              <div className="circle w-[1vh] h-[1vh] bg-white rounded-full flex items-center justify-center ml-1 mr-1"></div>
              <div className="numberOfSongs text-[#e2e2e2]">
                <div>{albumDetail.album_songs.length} songs</div>
              </div>
              <div className="numberOfSongs ml-1   text-[#626363]">
                <div>({albumDetail.album_long})</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div>Album is downloading</div>
        </>
      )}
    </>
  );
}

export default AlbumDetailHeader;
