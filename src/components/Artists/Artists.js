import React, { useEffect, useState } from "react";
import Artist from "../Artist/Artist";

const Artists = () => {
  const [artist, setArtist] = useState([]);
  useEffect(() => {
    fetch("./netflix-series.json")
      .then((res) => res.json())
      .then((data) => setArtist(data));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
                <h3>{artist.length}</h3>
                {
                artist.map(artist=><Artist artist={artist} key={artist.key}></Artist>)
            }
            
            </div>

            {/* card section  */}
          </div>
          <div className="col-md-3">
            {/* cart section  */}
            <h3>this is salary section</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
