
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {Link} from 'react-router-dom'

const Game = ({id, name, background_image, rating, deleteCard, short_screenshots}) => {
  return (
    <div>
      <Card>
        <CardImg style={{maxWidth: '100vh'}} src={background_image} alt={name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{rating}</CardText>
        </CardBody>
        <button onClick={() => deleteCard(id)}>
            Delete Game
        </button>
        <Link to={{
            pathname: `/game/${id}`,
            state: { short_screenshots }
        }}>
            Go to page
        </Link>
      </Card>

    </div>
  );
};

export default Game;