import React, { Component } from "react";
import Tile from "./Tile";
import { Columns, Row } from "react-bulma-components";
// function createRow (i) {
//     [...Array(3)].map((y, j) =>{
//         return (
//             <Column key={j+i}> {j} </Column>
//         );
// })
// }
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
        <Columns></Columns>
      </div>
    );
  }
}

export default Board;
