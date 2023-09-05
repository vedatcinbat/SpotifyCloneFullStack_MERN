import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./pages/Search";
import LikedSongs from "./pages/LikedSongs";
import UserProfile from "./pages/UserProfile";
import AlbumDetail from "./pages/AlbumDetail";

export default function App() {
  const [currentUser, setCurrentUser] = useState();
  const [currentSong, setCurrentSong] = useState();
  const [albumDetail, setAlbumDetail] = useState();

  /* useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/64ec6b46529b1c77f0f1c7ce")
      .then((res) => {
        const user = res.data;
        setCurrentUser(user);
      });
  }, []); */
  return (
    <>
      {currentUser ? (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  currentSong={currentSong}
                  setCurrentSong={setCurrentSong}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  setAlbumDetail={setAlbumDetail}
                />
              }
            />
            <Route
              path="/search"
              element={
                <Search
                  currentSong={currentSong}
                  setCurrentSong={setCurrentSong}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  albumDetail={albumDetail}
                  setAlbumDetail={setAlbumDetail}
                />
              }
            />
            <Route
              path="/likedsongs"
              element={
                <LikedSongs
                  currentUser={currentUser}
                  currentSong={currentSong}
                  setCurrentSong={setCurrentSong}
                  setCurrentUser={setCurrentUser}
                  albumDetail={albumDetail}
                  setAlbumDetail={setAlbumDetail}
                />
              }
            />
            <Route
              path="/albumDetail"
              element={
                <AlbumDetail
                  currentUser={currentUser}
                  currentSong={currentSong}
                  setCurrentSong={setCurrentSong}
                  setCurrentUser={setCurrentUser}
                  albumDetail={albumDetail}
                  setAlbumDetail={setAlbumDetail}
                />
              }
            />
            <Route
              path="/userProfile"
              element={<UserProfile currentUser={currentUser} />}
            />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/login"
              element={
                <Login
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}
