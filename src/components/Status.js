import React, { Component } from "react";
import { Notification, Button } from "react-bulma-components";

class Status extends Component {
  state = {};
  render() {
    let message = <Notification>Hello</Notification>;
    
    const count = this.props.count;
    const winner = this.props.winner;
    if (winner === 1) {
      message = <Notification color="danger">
      <i className="far fa-circle" /> won the game!! <div><Button  fullwidth color="warning" onClick={this.props.resetGame}>Reset game!</Button></div>
    </Notification>;
    } else if (winner === -1) {
      message = <Notification color="success">
      <i className="far fa-times" /> won the game!! <div><Button  fullwidth color="warning" onClick={this.props.resetGame}>Reset game!</Button></div>
    </Notification>;
    } else if (count >= 9) {
     message = <Notification color="info">
     It's a tie! <div><Button  fullwidth color="warning" onClick={this.props.resetGame}>Reset game!</Button></div>
   </Notification>;
    }
    else if (count %2 === 0) {
        message = <Notification color="danger">
            <i className="far fa-circle" />'s turn.
          </Notification>
    }
     else if (count %2 === 1) {
        message = <Notification color="success">
            <i className="far fa-times" />'s turn.
          </Notification>;
     }
    return (<div className="column">{message}</div>);
  }
}

export default Status;
