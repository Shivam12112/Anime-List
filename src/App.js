import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AnimeList from "./Components/AnimeList";
import Navbar from "./Components/Navbar";
import ViewAnime from "./Components/ViewAnime";
import WatchList from "./Components/WatchList";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchWatchList = async () => {
      let url = "http://localhost:5000/watchlist";
      let response = await axios.get(url);
      let body = response.data;
      setCount(body.length);
    };
    fetchWatchList();
  }, []);
  return (
    <BrowserRouter>
      <Navbar watchListCount={count} />
      <Routes>
        <Route exact path="/" element={<Navigate to={"/anime/list"} />}></Route>
        <Route exact path="/anime/list" element={<AnimeList />}></Route>
        <Route exact path="/anime/view/:id" element={<ViewAnime />}></Route>
        <Route exact path="/watchlist" element={<WatchList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
