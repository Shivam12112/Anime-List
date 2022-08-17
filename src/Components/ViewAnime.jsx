import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";

function ViewAnime() {
  let [anime, setAnime] = useState([]);
  let [loading, setLoading] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    const fetchAnime = async (id) => {
      try {
        setLoading(true);
        let url = `https://api.jikan.moe/v4/anime/${id}`;
        let response = await axios.get(url);
        let jsonResponse = response.data;
        setAnime(jsonResponse.data);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    };

    fetchAnime(id);
  }, []);

  return (
    <div className="container">
      {!loading ? (
        <Spinner />
      ) : (
        <div className="row">
          <p className=" display-3 text-center mt-3">{anime.title}</p>
          <div className="col">
            <div className="d-flex justify-content-between">
              <img
                className=" ms-5 mb-2 viewImgSize me-2"
                src={anime?.images?.jpg?.large_image_url}
                alt=""
              />
              <p className=" about">
                <p className="h2">Anime Info: </p>
                <span className="fw-bold">Rating :</span> {anime.rating}
                <br />
                <span className="fw-bold">Score :</span> {anime.score}
                <br />
                <span className="fw-bold">Total Episodes :</span>
                {anime.episodes}
                <br />
                <span className="fw-bold">Duraion :</span> {anime.duration}
                <br />
                <span className="fw-bold">Year :</span> {anime.year}
              </p>
            </div>
            <hr />
            <p className="h4 App">Synopsis</p>
            <p className="App">{anime.synopsis}</p>
            <hr />

            <div className="App h2">
              <p>Watch Trailer!!</p>
              <div className="video_container jsutify-content-center about">
                <iframe
                  className="responsive-iframe"
                  src={anime?.trailer?.embed_url}
                  title="video"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewAnime;
