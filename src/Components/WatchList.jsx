import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const WatchList = () => {
  const [watchList, setWatchList] = useState([]);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  let url = "http://localhost:5000/watchlist";
  let newAnime;

  useEffect(() => {
    const fetchWatchList = async () => {
      try {
        setLoading(true);
        let response = await axios.get(url);
        let body = await response.data;
        setWatchList(body);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWatchList();
  }, []);

  const removeFromWatchList = async (id) => {
    try {
      setLoading(true);
      if (window.confirm("Are you sure?")) {
        let response = await axios.delete(`${url}/${id}`);
        console.log(response.status);
        navigate("/watchlist", { replace: true });
        newAnime = watchList.filter((item) => item.id !== id);
        setLoading(false);
        setWatchList(newAnime);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRender = () => {
    return loading ? (
      <Spinner />
    ) : watchList?.length > 0 ? (
      watchList.map((anime, index) => {
        let img = anime.images.webp.image_url;
        return (
          <div className="col-md-4 col-lg-3 col-sm-6" key={index}>
            <div className="card mb-2">
              <Link to={`/anime/view/${anime.mal_id}`}>
                <img
                  src={img}
                  className="card-img-top animeImgSize"
                  alt="..."
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title titleSize">
                  {anime.title.length > 25
                    ? anime.title.slice(0, 25) + "..."
                    : anime.title}
                </h5>
                <p className="fw-bold">
                  <i className="fa-solid fa-star text-warning me-2"></i>
                  {anime.rating}
                  <br />
                  <i className="fa-solid fa-calendar-days text-success me-2"></i>
                  Release Year - {anime.year ? anime.year : "---"}
                </p>

                <a
                  href={anime.url}
                  className="btn btn-dark mb-2"
                  style={{ width: "100%" }}
                  target={"blank"}
                >
                  Visit Anime Page
                </a>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromWatchList(anime.id)}
                  style={{ width: "100%" }}
                >
                  Remove From List
                </button>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <p className="text-center h1">Your Watch-List is Empty</p>
    );
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-between">
            <p className="h3 mt-3">Watch List</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            assumenda eaque nihil itaque, debitis eum ipsum ipsa distinctio,
            possimus veritatis libero inventore quisquam ad dolorem facere
            mollitia neque quasi? Tempora.
          </p>
        </div>
      </div>
      <div className="row">{handleRender()}</div>
    </div>
  );
};

export default WatchList;
