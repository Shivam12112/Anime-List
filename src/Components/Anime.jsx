import React from "react";

function Anime(props) {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-3" style={{ width: "22rem" }}>
            <img
              src={props.anime.images.webp.image_url}
              className="card-img-top imgSize"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title titleSize">
                {props.anime.title.length > 25
                  ? props.anime.title.slice(0, 25) + "..."
                  : props.anime.title}
              </h5>
              <p className="fw-bold">
                <i className="fa-solid fa-star text-warning me-2"></i>
                {props.anime.rating}
              </p>
              <p className="card-text">
                {props.anime.synopsis.length > 200
                  ? props.anime.synopsis.slice(0, 200) + "..."
                  : props.anime.synopsis}
              </p>
              <div className="d-flex justify-content-between">
                <a href={props.anime.url} className="btn btn-dark">
                  Visit Page
                </a>
                <a href="/" className="btn btn-success mx-2">
                  View
                </a>
                <a href="/" className="btn btn-warning">
                  Watch List
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Anime;
