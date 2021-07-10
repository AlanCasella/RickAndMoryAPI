import React from "react";
import {
  useQuery,
} from "@apollo/client";
import SearchCharacter from "./querys/search"




function Character({search}) {
        const { loading, error, data } = useQuery(SearchCharacter,{
            variables: {nombre:search},
        });
      
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Hubo un error!</p>;
      
        return data.characters.results.map((character) => {
          return (
          <div key={character.id}>
            <div>Name: {character.name}</div>
            <img src={character.image} alt=""></img>
            <div>Status: {character.status}</div>
            <div>Specie: {character.species}</div>
            <span>Location: </span><a href={`/location/${character.location.id}`}>{character.location.name}</a>
            <div>Episodes: {character.episode.map((episodes => {
              return (
                <a key={episodes.id} href={`/episode/${episodes.id}`}>{episodes.id} </a>
              )
            }))}</div>
      
          </div>
          );
        });

    
}

export default Character;
