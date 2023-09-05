import React, { useEffect, useState } from "react";
import SearchNavbar from "./SearchNavbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AllSongs from "./AllSongs";
import AllAlbums from "./AllAlbums";

function SearchMain({
  currentUser,
  setCurrentUser,
  currentSong,
  setCurrentSong,
  albumDetail,
  setAlbumDetail,
}) {
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  const [searchQuery, setSearchQuery] = useState();
  const [filteredAlbums, setFilteredAlbums] = useState(albums);
  const [filteredSongs, setFilteredSongs] = useState(songs);

  const handleSearch = (query) => {
    const filteredAlbum = albums.filter((album) =>
      album.album_title.toLowerCase().includes(query.toLowerCase())
    );
    const filteredSong = songs.filter((song) =>
      song.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchQuery(query);
    setFilteredAlbums(filteredAlbum);
    setFilteredSongs(filteredSong);
  };

  const getAlbums = async () => {
    const albums = await axios.get("http://localhost:8000/api/albums");
    const albumDatas = albums.data.albums;
    setAlbums(albumDatas);
  };
  const getSongs = async () => {
    const songs = await axios.get("http://localhost:8000/api/songs");
    const songDatas = songs.data.allSongs;
    setSongs(songDatas);
  };

  useEffect(() => {
    getAlbums();
  }, []);
  useEffect(() => {
    getSongs();
  }, []);
  useEffect(() => {
    setFilteredAlbums(albums);
  }, [albums]);
  useEffect(() => {
    setFilteredSongs(songs);
  }, [songs]);

  return (
    <>
      <div className="w-[100%] relative overflow-y-auto rounded-xl">
        <SearchNavbar
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          searchQuery={searchQuery}
          onSearch={handleSearch}
        />
        <AllAlbums
          albums={filteredAlbums}
          currentUser={currentUser}
          albumDetail={albumDetail}
          setAlbumDetail={setAlbumDetail}
        />
        <AllSongs
          songs={filteredSongs}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          albumDetail={albumDetail}
          setAlbumDetail={setAlbumDetail}
        />
      </div>
    </>
  );
}

export default SearchMain;
