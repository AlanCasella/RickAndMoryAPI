import React from "react";
import { useQuery } from "@apollo/client";
import GetDimension from "./querys/location";
import Character from "./character";
import { useParams } from "react-router-dom";

function Dimension() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GetDimension, {
    variables: { dimensionId: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Hubo un error!</p>;

  const dimension = data.location;

  return (
    <div>
      <div>Locacion: {dimension.name}</div>
      <div>Tipo: {dimension.type}</div>
      <div>Dimension: {dimension.dimension}</div>
      <div>Residentes: </div>
      {!!dimension.residents && dimension.residents.map((residents) => {
         return (
            <Character key={residents.id} search={residents.name}></Character>
         )
      })}
    </div>
  );
}

export default Dimension;
