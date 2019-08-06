import React, { Component } from "react";
import Tile from "./Tile";
import Status from "./Status";
import { Columns } from "react-bulma-components";

class Board extends Component {
  state = {
    board: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    count: 0
  };

  setTile = (i, j) => {
    if (this.state.count < 9) {
      this.setState((state, props) => {
        const tempBoard = [...state.board];
        tempBoard[i][j] = state.count % 2 === 0 ? 1 : -1;
        return { board: tempBoard, count: state.count + 1 };
      });
    }
  };

  resetGame = () => {
    this.setState((state, props) => {
      const tempBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
      return { board: tempBoard, count: 0 };
    });
  };
  render() {
    let board = [...Array(3)].map((x, i) => {
      const row = [...Array(3)].map((y, j) => {
        return (
          <Columns.Column key={j}>
            <Tile
              tile={this.state.board[i][j]}
              setTile={() => this.setTile(i, j)}
            />
          </Columns.Column>
        );
      });
      return <Columns key={i}>{row}</Columns>;
    });
    return (
      <div>
        {board}
        <Columns>
          <Status
            count={this.state.count}
            resetGame={() => {
              this.resetGame();
            }}
          />
        </Columns>
      </div>
    );
  }
}

export default Board;
