import React from "react";
import "../App.css";
const PokemonOutput = ({ data }) => {
  return (
    <>
      <div className="wrapper_container">
        {data?.map((el, index) => (
          <div key={index} className="wrapper">
            <li>{el.name}</li>

            <img src={el.url} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default PokemonOutput;
