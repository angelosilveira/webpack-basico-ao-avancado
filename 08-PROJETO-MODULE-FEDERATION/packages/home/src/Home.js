import React from "react";

import { Jumbotron, Button } from "reactstrap";

const Home = () => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Ola module federation</h1>
        <hr className="my-2" />
        <p>este componente é de outro app</p>
        <p className="lead">
          <Button color="primary">Botão</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Home;
