import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {ContextProvider} from "../Components/utils/global.context";
import { useContextGlobal } from "../Components/utils/global.context";



const Detail = () => {

  const params = useParams();
  const navigate = useNavigate();

  const { dentist } = useContextGlobal(ContextProvider);

  const data = dentist[params.id -1];

  return (
    <>
        <h1>DETAIL DENTIST id: {params.id} </h1>
        <div className="container">
          <div className="card-detail">
            <div className="img">
              <img src="./images/doctor.jpg" alt="doctor" className="img-doc" />
            </div>
            <div className="data">
              <h3>{data.name}</h3>
              <p>📨 {data.email}</p>
              <p>☎ {data.phone}</p>
              <p>◉ {data.website}</p>
            </div>
          </div>
          <button onClick={() => navigate(-1)} className="btn-goback">Go Back</button>
        </div>
    </>
  );
};

export default Detail;
