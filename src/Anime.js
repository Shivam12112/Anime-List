import React, { useEffect, useState } from "react";

const Anime = () => {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let url = "https://api.jikan.moe/v4/anime";
      let response = await fetch(url);
      let jsonData = await response.json();
      setAnime(jsonData.data);
    };
    fetchData();
  }, []);
  console.log(anime);
  return (
    <div className="container">
      <div className="row">
        {anime.map((anime) => {
          return (
            <div className="col-md-3">
              <div className="card">
                <img
                  src={anime.images.webp.image_url}
                  className="card-img-top imgSize"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{anime.title}</h5>
                  <p className="card-text fw-bold">{anime.rating}</p>
                  <p className="card-text ">
                    {anime.year ? anime.year : "Year not available"}
                  </p>
                  <a
                    href={anime.url}
                    target="blank"
                    className="btn btn-primary"
                  >
                    Visit Anime Page
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Anime;
