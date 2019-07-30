import React from "react";

import { Card, CardHeader, CardBody, Text } from "./styles";

const CardComponent = ({ planet }) => (
  <Card className="card">
    <CardHeader className="card-header">
      <h3 className="text-center">{planet.name}</h3>
    </CardHeader>
    <CardBody className="card-body">
      <Text className="card-text">
        <strong>Population: </strong>
        {planet.population}
      </Text>

      <Text className="card-text">
        <strong>Climate: </strong>
        {planet.climate}
      </Text>

      <Text className="card-text">
        <strong>Terrain: </strong>
        {planet.terrain}
      </Text>

      <Text className="card-text text-center">
        Featured in{" "}
        {typeof planet.films !== "undefined" ? planet.films.length : 0} films
      </Text>
    </CardBody>
  </Card>
);

export default CardComponent;
