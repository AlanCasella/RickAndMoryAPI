import React from "react";
import { useQuery } from "@apollo/client";
import GetEpisode from "./querys/episode";
import Character from "./character";
import { useParams } from "react-router-dom";

function Episode() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GetEpisode, {
    variables: { characterId: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Hubo un error!</p>;

  const episode = data.episode;
  console.log(episode.characters)

  return (
    <div>
      <div>Nombre del episodio: {episode.name}</div>
      <div>Air Date: {episode.air_date}</div>
      <div>personajes: </div>
      {!!episode.characters && episode.characters.map((characters) => {
         return (
            <Character search={characters.name}></Character>
         )
      })}
    </div>
  );
}

export default Episode;
