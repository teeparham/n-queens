import React from 'react'
import Queen from './Queen'

enum Cell {No, Yes}
type Row = Array<Cell>;
type Props = { nQueens: number };

export default class Board extends React.Component<Props, {}> {
  blankRow() {
    return new Array<Cell>(this.props.nQueens).fill(Cell.No);
  }

  blank() {
    return Array.from({length: this.props.nQueens}, () => (this.blankRow()));
  }

  valid(board: Array<Row>, row: number, column: number): boolean {
    // queen in row?
    for (let j = 0; j < column; j++) {
      if (board[row][j] === Cell.Yes) {
        return false;
      }
    }

    // queen on upper diagonal?
    for (let i = row, j = column; i >= 0 && j >= 0; i--, j-- ) {
      if (board[i][j] === Cell.Yes) {
        return false;
      }
    }

    // queen on lower diagonal?
    for (let i = row, j = column; i < this.props.nQueens && j >= 0; i++, j-- ) {
      if (board[i][j] === Cell.Yes) {
        return false;
      }
    }

    // ok!
    return true;
  }

  place(board: Array<Row>, column: number) {
    if (column === this.props.nQueens) {
      return true; // solved!
    }
    for (let row = 0; row < this.props.nQueens; row++) {
      if (this.valid(board, row, column)) {
        board[row][column] = Cell.Yes;

        // solve for next column
        if (this.place(board, column + 1)) {
          return true;
        }

        // backtrack - above placement didn't work
        board[row][column] = Cell.No;
      }

    }
    return false; // nope
  }

  solve() {
    let board = this.blank();
    this.place(board, 0);
    return board;
  }

  static renderCell(cell: Cell) {
    if (cell === Cell.No) {
      return(<span className="dib w2 h2">o</span>)
    } else {
      return(<span className="dib w2 h2"><img src="logo.png" className="di h2 w2" alt="queen" /></span>)
    }
  }

  renderRow(row: Row) {
    return(
      <div className="">
        {row.map((cell) => Board.renderCell(cell))}
      </div>
    );
  }

  solution() {
    return(
      <div>
        <h4 className="mb2">A solution</h4>
        <div className="bg-white-20 ba br3 b--black-50">
          {this.solve().map((row) => this.renderRow(row))}
        </div>
      </div>
    )
  }

  render() {
    if (this.props.nQueens === 1) {
      return(<div><h4 className="mb2 green">The solution</h4><Queen /></div>)
    }
    else if (this.props.nQueens === 2 || this.props.nQueens === 3) {
      return(<p className="red">Impossible!</p>)
    }
    else return this.solution();
  }
}

