import React, { useEffect, useState } from "react";
import Anime from "./Anime";
import Spinner from "./Spinner";
import axios from "axios";

function AnimeList() {
  const [state, setState] = useState({
    loading: false,
    animes: [],
    filteredAnimes: [],
    totalPages: "",
    errorMessage: "",
  });
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [watchlist, setWatchlist] = useState([]);

  const fetchData = async () => {
    try {
      setState({ loading: true });
      let url = "https://api.jikan.moe/v4/anime?limit=24";
      let response = await axios.get(url);
      let jsonResponse = response.data;
      setState({
        ...state,
        loading: false,
        animes: jsonResponse.data,
        filteredAnimes: jsonResponse.data,
        totalPages: jsonResponse.pagination.last_visible_page,
      });
    } catch (error) {
      setState({ ...state, loading: false, errorMessage: error.message });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleNext = async () => {
    try {
      setState({ loading: true });
      let url = `https://api.jikan.moe/v4/anime?limit=24&page=${page + 1}`;
      // console.log(url);
      let response = await axios.get(url);
      let jsonResponse = response.data;

      setState({
        ...state,
        animes: jsonResponse.data,
        loading: false,
        filteredAnimes: jsonResponse.data,
      });
      setPage(page + 1);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlePrevious = async () => {
    try {
      setState({ loading: true });
      let url = `https://api.jikan.moe/v4/anime?limit=24&page=${page - 1}`;
      let response = await axios.get(url);
      let jsonResponse = response.data;

      setState({
        ...state,
        loading: false,
        animes: jsonResponse.data,
        filteredAnimes: jsonResponse.data,
      });
      setPage(page - 1);
    } catch (error) {
      console.log(error.message);
    }
  };
  const addToWatchList = async (anime) => {
    // console.log(anime);
    setWatchlist(anime);
    console.log(watchlist);
    let url = "http://localhost:5000/data";
    let body = await axios.post(url, anime);
    console.log(body);
  };

  const searchAnimes = (event) => {
    setQuery(event.target.value);
    let filterAnime = state.animes.filter((anime) => {
      return anime.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setState({ ...state, filteredAnimes: filterAnime });
  };

  let { loading, filteredAnimes, totalPages } = state;

  return (
    <div className="container p-3">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-between">
            <p className="h3">Anime List</p>
            <p className="d-flex">
              <input
                className="form-control me-2"
                name="text"
                value={query.text}
                type="search"
                onChange={searchAnimes}
                placeholder="Search Here..."
              />
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            assumenda eaque nihil itaque, debitis eum ipsum ipsa distinctio,
            possimus veritatis libero inventore quisquam ad dolorem facere
            mollitia neque quasi? Tempora.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-between my-2">
        <button
          className="btn btn-dark"
          disabled={page <= 1 ? true : false}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <p className="h4 text-danger">{`${page} out of ${
          totalPages ? totalPages : 1042
        }`}</p>
        <button className="btn btn-dark" onClick={handleNext}>
          Next
        </button>
      </div>
      <div className="row">
        {loading ? (
          <Spinner />
        ) : (
          filteredAnimes.length > 0 &&
          filteredAnimes.map((anime) => {
            return (
              <div className="col-md-4 align-items-center" key={anime.mal_id}>
                <Anime anime={anime} addToWatchList={addToWatchList} />
              </div>
            );
          })
        )}
      </div>
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-dark"
          disabled={page <= 1 ? true : false}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className="btn btn-dark"
          disabled={page >= totalPages ? true : false}
          onClick={() => handleNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AnimeList;
