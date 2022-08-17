import React from "react";
import { Link } from "react-router-dom";

function Anime(props) {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-3" style={{ width: "22rem" }}>
            <Link to={`/anime/view/${props.anime.mal_id}`}>
              <img
                src={props.anime.images.webp.image_url}
                className="card-img-top imgSize"
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
                Release Year -{" "}
                {props.anime.year ? props.anime.year : "Not Available"}
              </p>

              <div className="d-flex justify-content-between">
                <a
                  href={props.anime.url}
                  className="btn btn-dark"
                  target={"blank"}
                >
                  Visit Anime Page
                </a>

                <button
                  className="btn btn-warning"
                  onClick={() => props.addToWatchList(props.anime)}
                >
                  Add to Watch List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Anime;
