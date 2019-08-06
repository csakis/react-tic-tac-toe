import React, { Component } from "react";
import { Card } from "react-bulma-components";
import "./Tile.css";
import "../../node_modules/@fortawesome/fontawesome-pro/css/all.css";

class Tile extends Component {
  state = {};
  render() {
    let icon = "far fa-4x ";
    switch (this.props.tile) {
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
      <Card onClick={this.props.setTile}>
        <Card.Content className="has-text-centered">
          <span className={icon} />
        </Card.Content>
      </Card>
    );
  }
}

export default Tile;
