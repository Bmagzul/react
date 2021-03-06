import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i, xy) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i, xy)}
                coordinates={xy}
                key={i}
            />
        );
    }

    render() {

        let   componentes = Array(3);
        let pos = 0;
        for (var i = 0; i < 3; i++) {
            const aux = Array(3);

            for (var j = 0; j < 3; j++) {
                aux[j] = this.renderSquare(pos, {"x" : j+1, "y": i+1});
                pos++;
            }

            componentes[i] = <div className="board-row" key={i}>{aux}</div>
        }

        return (
            <div>{componentes}</div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true,
            posHistory: [{"x": 0, "y":0}]
        };
    }

    handleClick(i, newxy) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        const posHistory = this.state.posHistory.slice(0, this.state.stepNumber+1);

        console.log(posHistory);
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
            posHistory: posHistory.concat([newxy])
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const posHistory = this.state.posHistory;
        let currentPos = {x: 0, y:0};

        const moves = history.map((step, move) => {
            currentPos = posHistory[move];

            const desc = move ?
            `Go to move #${move} (${currentPos.x}, ${currentPos.y})`:
            'Go to game start';

            let estilo = {}
            if (this.state.stepNumber === move) {
                estilo["fontWeight"] = "bold";
            }

            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)} style={estilo}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;

        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i, xy) => this.handleClick(i, xy)}
                    />
                </div>

                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
  }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}
