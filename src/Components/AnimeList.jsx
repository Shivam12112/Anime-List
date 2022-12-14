import React, { useEffect, useState } from "react";
import Anime from "./Anime";
import Spinner from "./Spinner";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

function AnimeList() {
  const [state, setState] = useState({
    loading: false,
    animes: [],
    filteredAnimes: [],
    errorMessage: "",
  });

  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const fetchData = async () => {
    try {
      setState({ loading: true });
      let url = "https://api.jikan.moe/v4/anime?limit=10";
      let response = await axios.get(url);
      let jsonResponse = response.data;
      setState({
        ...state,
        loading: false,
        animes: jsonResponse.data,
        filteredAnimes: jsonResponse.data,
      });
      setTotalPages(jsonResponse.pagination.last_visible_page);
    } catch (error) {
      setState({ ...state, loading: false, errorMessage: error.message });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addToWatchList = async (anime) => {
    let url = "http://localhost:5000/watchlist";
    await axios.post(url, anime);
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

  const fetchMore = async () => {
    try {
      let url = `https://api.jikan.moe/v4/anime?limit=10&page=${page + 1}`;
      let response = await axios.get(url);
      let jsonResponse = response.data;

      setState({
        ...state,
        animes: jsonResponse.data,
        filteredAnimes: filteredAnimes.concat(jsonResponse.data),
      });
      setPage(page + 1);
    } catch (error) {
      console.log(error.message);
    }
  };

  let { filteredAnimes } = state;

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

      <InfiniteScroll
        dataLength={filteredAnimes?.length}
        next={fetchMore}
        hasMore={page !== totalPages}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {filteredAnimes?.map((anime) => {
              return (
                <div className="col-md-4 col-lg-3 col-sm-6 " key={anime.mal_id}>
                  <Anime anime={anime} addToWatchList={addToWatchList} />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default AnimeList;
