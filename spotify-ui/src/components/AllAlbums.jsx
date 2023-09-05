import React, { useEffect, useState } from "react";
import AlbumBox from "./AlbumBox";
import axios from "axios";

function AllAlbums({ albums, albumDetail, setAlbumDetail }) {
  return (
    <>
      {albums ? (
        <div className="bg-blac mt-[15vh]">
          <div className="text-white">
            <div class="header p-4 text-xl font-bold">
              <div>Popular Albums</div>
            </div>
            <div class="albums p-4 grid grid-cols-5 gap-4">
              {albums.map((album) => {
                return (
                  <AlbumBox
                    albumDetail={albumDetail}
                    setAlbumDetail={setAlbumDetail}
                    albumInfo={album}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <>Albums are downloading</>
      )}
    </>
  );
}

export default AllAlbums;
