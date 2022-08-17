import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function WatchList() {
  let [state, setState] = useState([]);

  useEffect(() => {
    const fetchWatchList = async () => {
      let url = "http://localhost:5000/data";
      let response = await axios.get(url);
      let body = response.data;
      setState(body);
    };
    fetchWatchList();
  }, []);
  let navigate = useNavigate();
  const handleDelete = async (id) => {
    let url = `http://localhost:5000/data/${id}`;
    let response = await axios.delete(url);
    navigate("/", { replace: true });
    setState(response.data);
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
      <div className="row">
        {state.map((anime) => {
          return (
            <div className="col-md-4" key={anime.mal_id}>
              <div className="card mb-3" style={{ width: "22rem" }}>
                <img
                  src={anime?.images?.webp?.image_url}
                  className="card-img-top imgSize"
                  alt="..."
                />

                <div className="card-body">
                  <h5 className="card-title titleSize">{anime.title}</h5>
                  <p className="fw-bold">
                    <i className="fa-solid fa-star text-warning me-2"></i>
                    {anime.rating}
                    <br />
                    <i className="fa-solid fa-calendar-days text-success me-2"></i>
                    Release Year - {anime.year}
                  </p>

                  <div className="d-flex justify-content-between">
                    <a
                      href={anime.url}
                      className="btn btn-dark"
                      target={"blank"}
                    >
                      Visit Anime Page
                    </a>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        handleDelete(anime.mal_id);
                      }}
                    >
                      Remove From List
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WatchList;
