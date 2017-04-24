import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../styles/pieces.css';
import '../styles/chessboard.css';

// const ROWS = ['a','b','c','d','e','f','g','h'];
const ROWS = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
const COLS = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

class Chessboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pieces: []
        }
    }
    render() {
        return (
            <div className="Chessboard">
                {ROWS.map(rowIndex => {
                    return (
                        <div className="Row"
                            key={rowIndex}>
                            {
                                COLS.map(colIndex => {
                                    return (
                                        <div className={
                                            "Square" + (rowIndex % 2 == 0 && colIndex % 2 == 0 || rowIndex % 2 == 1 && colIndex % 2 == 1 ? " White" : " Black")
                                        }
                                            key={`${rowIndex}${colIndex}`} >
                                            <div className="Black Pawn Piece" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })}
            </div>
        )
    }
}

Chessboard.propTypes = {
    game: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    return {
        game: state.game
    }
}

export default connect(mapStateToProps, null)(Chessboard);
