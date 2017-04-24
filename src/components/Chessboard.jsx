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
        return (
            <div className="Chessboard">
                {COLS.map(colIndex => {
                    return (
                        <div className="Row"
                            key={colIndex}
                        >
                            {ROWS.map((rowIndex, rIdx) => {
                                return (
                                    <div className={
                                        "Square" + 
                                        ((rIdx + colIndex) % 2 == 0 ? " White" : " Black")
                                        }
                                        key={`${rowIndex}${colIndex}`} 
                                    >
                                        { this.props.chessboard[rowIndex][colIndex].piece &&
                                        <div className={"Piece " + this.props.chessboard[rowIndex][colIndex].color + " " + this.props.chessboard[rowIndex][colIndex].piece} />
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
    chessboard: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    return {
        metadata: state.game.metadata,
        chessboard: state.chessboard.chessboard

    }
}

export default connect(mapStateToProps, null)(Chessboard);
