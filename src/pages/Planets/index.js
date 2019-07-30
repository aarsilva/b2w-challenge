import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Loading from "../../components/Loading";

import { Container, Button } from "./styles";

export default function Planets() {
  const [planet, setPlanet] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const random = Math.floor(Math.random() * (61 - 1) + 1);
    const response = await fetch(`https://swapi.co/api/planets/${random}/`);

    const data = await response.json();

    setPlanet(data);
    setIsLoading(false);
  }

  async function findAnother() {
    setIsLoading(true);
    setPlanet({});

    fetchData();
  }

  return (
    <Container>
      <div className="col-sm-4 text-center">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Card planet={planet} />
            <Button
              type="button"
              className="btn btn-warning"
              onClick={findAnother}
            >
              Next
            </Button>
          </>
        )}
      </div>
    </Container>
  );
}
