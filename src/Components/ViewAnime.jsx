import React from "react";

function ViewAnime() {
  return (
    <div className="container">
      <div className="row">
        <div className="App">
          <h1>Cowboy Bebop</h1>
          <img
            src="https://cdn.myanimelist.net/images/anime/4/19644l.webp"
            alt=""
          />
          <hr />
          <p className="h4">About</p>
          <p>
            Crime is timeless. By the year 2071, humanity has expanded across
            the galaxy, filling the surface of other planets with settlements
            like those on Earth. These new societies are plagued by murder, drug
            use, and theft, and intergalactic outlaws are hunted by a growing
            number of tough bounty hunters. Spike Spiegel and Jet Black pursue
            criminals throughout space to make a humble living. Beneath his
            goofy and aloof demeanor, Spike is haunted by the weight of his
            violent past. Meanwhile, Jet manages his own troubled memories while
            taking care of Spike and the Bebop, their ship. The duo is joined by
            the beautiful con artist Faye Valentine, odd child Edward Wong Hau
            Pepelu Tivrusky IV, and Ein, a bioengineered Welsh Corgi. While
            developing bonds and working to catch a colorful cast of criminals,
            the Bebop crew's lives are disrupted by a menace from Spike's past.
            As a rival's maniacal plot continues to unravel, Spike must choose
            between life with his newfound family or revenge for his old wounds.
            [Written by MAL Rewrite]
          </p>
          <hr />

          <div className="App h2">
            <p>Watch Trailer!!</p>
            <div className="video_container jsutify-content-center">
              <iframe
                className="responsive-iframe"
                src="https://www.youtube.com/embed/qig4KOK2R2g?enablejsapi=1&wmode=opaque&autoplay=1"
                title="video"
              />
            </div>
          </div>
        </div>
        <p className="h3">Anime Info: </p>
        <p>
          <span className="fw-bold">Rating :</span> R - 17+ (violence &
          profanity).
          <br />
          <span className="fw-bold">Score :</span> 8.75.
          <br />
          <span className="fw-bold">Duraion :</span> 24 min per ep.
          <br />
          <span className="fw-bold">Year :</span> 1998.
        </p>
      </div>
    </div>
  );
}

export default ViewAnime;
