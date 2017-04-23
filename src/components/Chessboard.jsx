import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../styles/pieces.css';

class Chessboard extends Component {
    render() {
        return (
            <div>
                <div className="Piece White King"/>
                <div className="Piece Black King"/>
                <div className="Piece White Knight"/>
                <div className="Piece Black Queen"/>
                <div className="Piece Black Pawn"/>
                <div className="Piece White Bishop"/>
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
