import React, { Component } from 'react';
import Tile from './Tile'
import {Columns} from 'react-bulma-components';
// function createRow (i) {
//     [...Array(3)].map((y, j) =>{
//         return (
//             <Column key={j+i}> {j} </Column>
//         );
// })
// }
class Board extends Component {
    state = {board: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        ],
    };
    render() { 
        let boardRow = [...Array(3)].map((x, i) =>{
            const row = [...Array(3)].map((y, j) =>{
                return (
                    <Columns.Column key={j}> <Tile/>{this.state.board[i][j]} </Columns.Column>
                );
            });
            return (
                <Columns key={i}>
                    {row}           
                </Columns>
            );
        })
        return (
            <div>
                 {boardRow}
            </div>
          );
    }
}
 
export default Board;