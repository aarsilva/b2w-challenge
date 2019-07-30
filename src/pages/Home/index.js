import React from "react";

import { Container, Logo, Button } from "./styles";

import svg from "../../assets/img/Logo/logo.svg";

export default function Home() {
  return (
    <Container>
      <div className="col-sm-4 text-center">
        <Logo className="img-fluid" src={svg} alt="Star Wars Game" />
        <div className="w-100 my-4" />
        <Button role="button" className="btn btn-warning" href="/planets">
          Começar
        </Button>
      </div>
    </Container>
  );
}
