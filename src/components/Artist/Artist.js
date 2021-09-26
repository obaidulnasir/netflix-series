import React from "react";

const Artist = (props) => {
   const{name, phone, email}= props.artist;

  return (
        <div className="col-sm-4 mb-3">
          <div className="card">
              {/* my code  */}
              
              {/* my code end  */}
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
                {phone}
              </p>
              <a href="#" className="btn btn-primary">
                button
              </a>
            </div>
          </div>
        </div>    
  );
};

export default Artist;
