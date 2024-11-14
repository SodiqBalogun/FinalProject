import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomePage from "./Pages/homePage.jsx";
import CreatePost from "./Pages/createPost.jsx";
import PostInfo from "./Pages/postInfo.jsx";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <Link to={"/"} > <h2> SongHub </h2> </Link>
          <input type="text" placeholder="search" />
          <Link to={"/create"}> <h3> Create New Post </h3> </Link>
        </div>

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
