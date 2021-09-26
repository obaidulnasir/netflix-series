import React from "react";

const Artist = (props) => {
   const{name, phone, demandPerSeries, email}= props.artist;
  //  console.log(props);

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
              <p>{demandPerSeries}</p>
              <button onClick={()=>props.eventHandle(props.artist)} className="btn btn-info">Pick this person</button>
            </div>
          </div>
        </div>    
  );
};

export default Artist;
