import React from "react";
import "./Artist.css"

const Artist = (props) => {
   const{name, age, gender, salary, email, phone,img}= props.artist;
   console.log(props.artist);

  return (
        <div className="col-sm-4 mb-3">
          <div className="card actor-card">
             <img className="card-image" alt="actor"  src={img}/>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
               <small><span className="fw-bold">Age:</span> {age}</small><hr />
               <small><span className="fw-bold">Email:</span> {email}</small><br />
               <small><span className="fw-bold">Phone:</span> {phone}</small><br />
               <small><span className="fw-bold">Gender:</span> {gender}</small><hr />
               <small><span className="fw-bold">Salary:</span> {salary}</small>
              </p>

              <button onClick={()=>props.eventHandle(props.artist)} className="btn btn-dark"><i className="bi bi-film"> </i>Select Artist</button>
            </div>
          </div>
        </div>    
  );
};

export default Artist;
