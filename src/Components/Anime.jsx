import React, { useState } from "react";
import { Link } from "react-router-dom";

function Anime(props) {
  const [style, setStyle] = useState({
    className: "btn btn-warning",
    name: "Add to Watch List",
  });
  const addToWatchListStyle = () => {
    setStyle({
      ...style,
      className: "btn btn-info",
      name: "Successfully Added",
    });
  };

  return (
    <div className="card mb-3">
      <Link to={`/anime/view/${props.anime.mal_id}`}>
        <img
          src={props.anime.images.webp.image_url}
          className="card-img-top animeImgSize"
          alt="..."
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title titleSize">
          {props.anime.title.length > 25
            ? props.anime.title.slice(0, 25) + "..."
            : props.anime.title}
        </h5>
        <p className="fw-bold">
          <i className="fa-solid fa-star text-warning me-2"></i>
          {props.anime.rating}
          <br />
          <i className="fa-solid fa-calendar-days text-success me-2"></i>
          Release Year - {props.anime.year ? props.anime.year : "---"}
        </p>

        <a
          href={props.anime.url}
          className="btn btn-dark mb-2"
          style={{ width: "100%" }}
          target={"blank"}
        >
          Visit Anime Page
        </a>

        <button
          className={style.className}
          style={{ width: "100%" }}
          onClick={() => {
            props.addToWatchList(props.anime);
            addToWatchListStyle();
          }}
        >
          {style.name}
        </button>
      </div>
    </div>
  );
}

export default Anime;
