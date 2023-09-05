import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [country, setCountry] = useState("");
  const [college, setCollege] = useState("");
  const [likedSongs, setLikedSongs] = useState([]);
  const [playLists, setPlayLists] = useState([]);

  const navigate = useNavigate();

  const createUser = async () => {
    const newUserObj = {
      username: username,
      password: password,
      email: email,
      age: age,
      country: country,
      college: college,
      likedSongs: likedSongs,
      playLists: playLists,
    };
    await axios.post(`http://localhost:8000/api/users`, newUserObj).then(() => {
      alert("Signup Successfull");
      navigate("/");
    });
  };

  return (
    <div className="w-[100%] h-[100vh] bg-[#212121] text-white flex justify-center items-center ">
      <div className="loginSystem -mt-[2rem] h-[70vh] w-[30rem] flex flex-col  justify-between items-center rounded-[1rem] shadow shadow-white bg-[#2e2e2e] p-2">
        <div className="text-center text-2xl text-[#1ed760]">
          Spotify Clone Login System
        </div>
        <div className="form-area flex flex-col w-[25rem] h-[50vh] overflow-hidden flex flex-col justify-between w-full">
          <div className="username flex justify-center items-center p-2">
            <input
              className="w-[90%] hover:text-[#212121] text-xl bg-[#212121] text-white p-2 hover:rounded-xl duration-500 hover:bg-[#1ed760]"
              type="text"
              placeholder="username..."
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="password  flex justify-center items-center p-2">
            <input
              className="w-[90%] hover:text-[#212121] text-xl bg-[#212121] text-white p-2 hover:rounded-xl duration-500 hover:bg-[#1ed760]"
              type="text"
              placeholder="password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="password  flex justify-center items-center p-2">
            <input
              className="w-[90%] hover:text-[#212121] text-xl bg-[#212121] text-white p-2 hover:rounded-xl duration-500 hover:bg-[#1ed760]"
              type="text"
              placeholder="email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password  flex justify-center items-center p-2">
            <input
              className="w-[90%] hover:text-[#212121] text-xl bg-[#212121] text-white p-2 hover:rounded-xl duration-500 hover:bg-[#1ed760]"
              type="number"
              placeholder="age..."
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="password  flex justify-center items-center p-2">
            <input
              className="w-[90%] hover:text-[#212121] text-xl bg-[#212121] text-white p-2 hover:rounded-xl duration-500 hover:bg-[#1ed760]"
              type="text"
              placeholder="country..."
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="password  flex justify-center items-center p-2">
            <input
              className="w-[90%] hover:text-[#212121] text-xl bg-[#212121] text-white p-2 hover:rounded-xl duration-500 hover:bg-[#1ed760]"
              type="text"
              placeholder="college..."
              onChange={(e) => setCollege(e.target.value)}
            />
          </div>
        </div>
        <div className="buttons mb-4 align-center text-center flex-row items-center rounded-xl">
          <div className="bg-[#181818] mb-2 bg-[#181818] text-gray-300 p-3 w-[7rem] rounded-2xl hover:bg-[#1ed760] hover:text-black">
            <button onClick={() => createUser()}>Signup</button>
          </div>
          <Link to="/">
            <button className=" bg-[#181818] text-gray-300 p-3 w-[7rem] rounded-2xl hover:bg-[#1ed760] hover:text-black">
              HomePage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
