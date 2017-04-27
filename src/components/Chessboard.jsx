import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../styles/pieces.css';
import '../styles/chessboard.css';

const ROWS = ['a','b','c','d','e','f','g','h'];
const COLS = [ 0, 1, 2, 3, 4, 5, 6, 7].reverse();

class Chessboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pieces: []
        }
    }
    render() {
        const { chessboard } = this.props;
        console.debug('chessboard',chessboard);
        return (
            <div className="Chessboard">
                {chessboard.map((row, rowIndex) => {
                    return (
                        <div className="Row"
                            key={rowIndex}
                        >
                            {row.map((piece, columnIndex) => {
                                let pieceType, pieceColor;

                                // TODO: move to utility function
                                if (piece) {
                                    switch(piece.type) {
                                        case 'p':
                                            pieceType = "Pawn";
                                            break;
                                        case 'n':
                                            pieceType = "Knight";
                                            break;
                                        case 'b':
                                            pieceType = "Bishop";
                                            break;
                                        case 'q':
                                            pieceType = "Queen";
                                            break;
                                        case 'r': 
                                            pieceType = "Rook";
                                            break;
                                        case 'k':
                                            pieceType = "King";
                                            break;
                                    }
                                    pieceColor = piece.color == "w" ? "White" : "Black";
                                }

                                return (
                                    <div className={
                                        "Square" + 
                                        ((columnIndex + rowIndex) % 2 == 0 ? " White" : " Black")
                                        }
                                        key={`${rowIndex}${columnIndex}`} 
                                    >
                                        { piece &&
                                        <div className={"Piece " + pieceColor + " " + pieceType} />
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
}

Chessboard.propTypes = {
    metadata: PropTypes.object.isRequired,
    chessboard: PropTypes.array.isRequired,
}

function mapStateToProps(state) {
    return {
        metadata: state.game.metadata,
        chessboard: state.chessboard.chessboard

    }
}

export default connect(mapStateToProps, null)(Chessboard);
