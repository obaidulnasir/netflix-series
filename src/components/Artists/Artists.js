import React, { useEffect, useState } from "react";
import Artist from "../Artist/Artist";
import Cart from "../Cart/Cart";

const Artists = () => {
  const [artist, setArtist] = useState([]);
  const [picked, setPicked]=useState([])
  useEffect(() => {
    fetch("./netflix.json")
      .then((res) => res.json())
      .then((data) => setArtist(data));
  }, []);

  const eventHandle = (artist)=>{
      const newPicked = [...picked, artist];
      setPicked(newPicked);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
                
                {
                artist.map(artist=><Artist eventHandle={eventHandle} artist={artist} key={artist.key}>

                </Artist>)
            }
            
            </div>

            {/* card section  */}
          </div>
          <div className="col-md-3">
            {/* cart section  */}
            <Cart picked={picked}></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
