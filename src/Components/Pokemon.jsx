import React, { useEffect, useState } from "react";
import { API } from "../API";
import PokemonOutput from "./PokemonOutput";
import "../App.css";
const Pokemon = () => {
  const [data, setData] = useState([]);
  const getAllPokemon = async () => {
    const req = await fetch(API);
    const res = await req.json();
    setData(res.results);
  };
  useEffect(() => {
    getAllPokemon();
  }, []);
  console.log(data);
  return (
    <div className="container_pokemon">
      <PokemonOutput data={data} />
    </div>
  );
};

export default Pokemon;
