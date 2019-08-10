import React from "react";
import { Card } from "react-bulma-components";
import "./Tile.css";
import "../../node_modules/@fortawesome/fontawesome-pro/css/all.css";

const Tile = props => {
  let icon = "far fa-4x ";
  switch (props.tile) {
    case -1:
      icon += "fa-times has-text-success";
      break;
    case 0:
      icon += "fa-blank fa-stop";
      break;
    case 1:
      icon += "fa-circle has-text-danger";
      break;
    default:
      icon += "fa-blank fa-stop";
      break;
  }

  return (
    <Card onClick={props.setTile}>
      <Card.Content className="has-text-centered">
        <span className={icon} />
      </Card.Content>
    </Card>
  );
};

export default Tile;
