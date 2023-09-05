import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FavoriteBorder } from "@mui/icons-material";
function Song({
  songInfo,
  setCurrentSong,
  setAlbumDetail,
  currentUser,
  setCurrentUser,
  songs,
  setSongs,
}) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  if (!songInfo || !songInfo.title) {
    return <div>Loading...</div>;
  }
  const goAlbum = async () => {
    const albumId = songInfo.album._id;
    console.log(albumId);
    const albumInfo = await axios.get(
      `http://localhost:8000/api/albums/${albumId}`
    );
    const albumdata = albumInfo.data;
    console.log(albumdata);

    await setAlbumDetail({ ...albumdata });
    navigate("/albumDetail");
  };
  const deleteSong = async () => {
    let likedSongs = currentUser.likedSongs;
    let updatedLikedSongs = likedSongs.filter(
      (song) => song._id !== songInfo._id
    );
    await axios
      .patch(`http://localhost:8000/api/users/${currentUser._id}`, {
        likedSongs: updatedLikedSongs,
      })
      .then(() => {
        const updatedUser = { ...currentUser, likedSongs: updatedLikedSongs };
        setCurrentUser(updatedUser);
        setSongs(updatedLikedSongs);
        setCurrentSong();
      });
  };
  return (
    <div
      onClick={() => setCurrentSong(songInfo)}
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}
      className="flex items-center pl-[5vh] p-4  mt-[1vh] gap-2 cursor-pointer hover:bg-[#2b2a2a] rounded-lg"
    >
      <div className="flex items-center flex-1">
        <img className="w-[6vh]" src={songInfo.songImg} alt="" />
        <div className="songInfo ml-2 text-left flex flex-col justify-center">
          <div className="mb-[0.1vh] mt-2 text-[#ffffff]">{songInfo.title}</div>
          {/*           <div className="text-[#8d8d8d]">{songInfo.artist.artistname}</div>
           */}{" "}
        </div>
      </div>
      <div
        onClick={goAlbum}
        className="flex-1 ml-[28vh] text-left text-[#8d8d8d] hover:text-[#636361]"
      >
        {songInfo.album.album_title}
      </div>
      <div className="flex-1 -ml-[7vh] translate-x-[1vh] text-[#8d8d8d]">
        {songInfo.duration}
        <button
          onClick={() => deleteSong(songInfo)}
          className={`ml-2 bg-[#1ed760] text-black p-2 rounded-xl hover:text-white opacity-${
            isHovered ? "100" : "0"
          }`}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Song;

/*
 */
