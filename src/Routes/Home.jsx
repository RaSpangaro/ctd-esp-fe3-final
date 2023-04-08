import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";


const Home = () => {
  const { dentist } = useContextGlobal();

  return (
    <>
      <h1>HOME</h1>
      <div className="container">
        <div className="card-major">
          {dentist.map((dentist) => (
            <Card key={dentist.id} data={dentist} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
