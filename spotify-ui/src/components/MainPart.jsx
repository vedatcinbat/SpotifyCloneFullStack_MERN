import React from "react";
import Home from "../pages/Home";
import MainPartNavbar from "./MainPartNavbar";
import { Link } from "react-router-dom";
import Login from "../pages/Login";
import AlbumLists from "./AlbumLists";
import Playlists from "./Playlists";
import JapaneseSongs from "./JapaneseSongs";
import LikedSongsHeader from "./LikedSongsHeader";
import LikedSongList from "./LikedSongList";
import AlbumDetailHeader from "./AlbumDetailHeader";
import { useLocation } from "react-router-dom";
function MainPart({
  message,
  currentUser,
  setCurrentUser,
  likedSongs,
  currentSong,
  setCurrentSong,
  search,
  albumDetails, // true
  albumDetail,
  setAlbumDetail,
}) {
  const location = useLocation();
  return (
    <>
      {message ? (
        <div className="w-[80%] relative overflow-y-auto rounded-xl">
          <MainPartNavbar currentUser={currentUser} />
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </div>
      ) : (
        <div className="w-[80%] relative overflow-y-auto rounded-xl">
          <>
            {likedSongs ? (
              <>
                <>
                  <MainPartNavbar
                    setCurrentUser={setCurrentUser}
                    currentUser={currentUser}
                    likedSongs={likedSongs}
                    setCurrentSong={setCurrentSong}
                    setAlbumDetail={setAlbumDetail}
                  />
                  <LikedSongsHeader currentUser={currentUser} />
                  <LikedSongList
                    currentSong={currentSong}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    setCurrentSong={setCurrentSong}
                    albumDetail={albumDetail}
                    setAlbumDetail={setAlbumDetail}
                  />
                </>
                ) : (
                <div>
                  {search ? (
                    <MainPartNavbar
                      setCurrentUser={setCurrentUser}
                      currentUser={currentUser}
                      search={search}
                      setCurrentSong={setCurrentSong}
                      setAlbumDetail={setAlbumDetail}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </>
            ) : (
              <>
                {albumDetail ? (
                  <>
                    <MainPartNavbar
                      setCurrentUser={setCurrentUser}
                      currentUser={currentUser}
                      setCurrentSong={setCurrentSong}
                      setAlbumDetail={setAlbumDetail}
                      currentSong={currentSong}
                    />
                    <AlbumDetailHeader
                      albumDetail={albumDetail}
                      currentSong={currentSong}
                    />
                  </>
                ) : (
                  <>
                    <MainPartNavbar
                      setCurrentUser={setCurrentUser}
                      currentUser={currentUser}
                      likedSongs={likedSongs}
                      setCurrentSong={setCurrentSong}
                      setAlbumDetail={setAlbumDetail}
                    />
                  </>
                )}
              </>
            )}
          </>
        </div>
      )}
    </>
  );
}

export default MainPart;
