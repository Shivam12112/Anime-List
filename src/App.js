import AnimeList from "./Components/AnimeList";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ViewAnime from "./Components/ViewAnime";
import WatchList from "./Components/WatchList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
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
