import React, { useState } from "react";
import axios from "axios";
function CreateSong() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState(null);
  const [album, setAlbum] = useState(null);
  const [songImg, setSongImg] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [duration, setDuration] = useState("");
  const [lyrcs, setLyrcs] = useState("");
  const [genre, setGenre] = useState("");
  const [totalListener, setTotalListener] = useState("");

  const saveSong = () => {
    //event.preventDefault();
    try {
      const songObj = {
        title: title,
        artist: artist,
        album: album,
        songImg: songImg,
        publishYear: publishYear,
        duration: duration,
        lyrcs: lyrcs,
        genre: genre,
        totalListener: totalListener,
      };
      axios.post("http://localhost:8000/api/songs", songObj);
      console.log(songObj);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-violet-300 w-full h-[40rem]">
      <h2>Create Songs</h2>
      <div class="inputarea flex flex-col w-[20rem] g-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
        />
        <input
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          type="text"
          placeholder="Artist"
        />
        <input
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
          type="text"
          placeholder="Album"
        />
        <input
          value={songImg}
          onChange={(e) => setSongImg(e.target.value)}
          type="text"
          placeholder="SongImg"
        />
        <input
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
          type="text"
          placeholder="PublishYear"
        />
        <input
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          type="text"
          placeholder="duration"
        />
        <input
          value={lyrcs}
          onChange={(e) => setLyrcs(e.target.value)}
          type="text"
          placeholder="lyrcs"
        />
        <input
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          type="text"
          placeholder="genre"
        />
        <input
          value={totalListener}
          onChange={(e) => setTotalListener(e.target.value)}
          type="text"
          placeholder="totalListener"
        />
        <button onClick={saveSong}>Save Song</button>
      </div>
    </div>
  );
}

export default CreateSong;
