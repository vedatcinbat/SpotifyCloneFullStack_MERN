import React, { useEffect, useState } from "react";
import { FavoriteBorder } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SongBox({ songInfo, currentUser, setCurrentUser, setAlbumDetail }) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const isLikedOrNot = async () => {
    const isLikedSong = await currentUser.likedSongs.some(
      (song) => song.title === songInfo.title
    );
    if (isLikedSong) {
      setLiked(true);
    }
  };

  useEffect(() => {
    isLikedOrNot();
  }, [currentUser.likedSongs.length]);

  const addLikedSongs = async () => {
    // We have to make sure that id is not repeated twice in likedSongs array:
    const songExists = currentUser.likedSongs.some(
      (song) => song.title === songInfo.title
    );

    if (!songExists) {
      let likedSongs = currentUser.likedSongs;
      let updatedLikedSongs = [...likedSongs, songInfo];
      await axios.patch(`http://localhost:8000/api/users/${currentUser._id}`, {
        likedSongs: updatedLikedSongs,
      });

      alert(`This song has been added to your likedSongs: ${songInfo.title}`);
      const updatedUser = { ...currentUser, likedSongs: updatedLikedSongs };
      console.log(updatedLikedSongs);
      console.log(updatedUser);
      setCurrentUser(updatedUser);
    } else {
      alert(
        `This song has been already added to Liked Songs : ${songInfo.title}`
      );
    }
  };
  const goAlbum = async () => {
    const albumId = songInfo.album._id;
    const albumInfo = await axios.get(
      `http://localhost:8000/api/albums/${albumId}`
    );
    const albumdata = albumInfo.data;

    await setAlbumDetail(albumdata);
    navigate("/albumDetail");
  };
  return (
    <div className="songBox rounded-2xl w-[30vh] h-[45vh] bg-[#ffffff12] hover:bg-[#ffffff1a] mb-[1vh] overflow-hidden mb-[5rem] cursor-pointer">
      <div class="songImg">
        <img src={songInfo.songImg} alt="songImg" />
      </div>
      <div class="songDetails flex flex-col p-2">
        <div class="songText bg-[#1c1c1c] w-[6vh] text-[#7d7a7a] p-2 rounded-xl">
          <div>Song</div>
        </div>
        <div class="title text-center">
          <div className="text-white text-lg">{songInfo.title}</div>
        </div>
        <div class="desc flex flex-col items-center">
          {/* <div>{songInfo.artist.artistname}</div> */}
          <div
            onClick={() => goAlbum()}
            className="text-[1.4vh] hover:text-[#7d7a7a]"
          >
            ({songInfo.album.album_title})
          </div>
        </div>
        <div
          onClick={addLikedSongs}
          className="HearthIcon flex justify-end items-end mt-1 mr-1"
        >
          <FavoriteBorder className={`${liked ? "text-green-300" : ""} `} />
        </div>
      </div>
    </div>
  );
}

export default SongBox;
/*
 */
