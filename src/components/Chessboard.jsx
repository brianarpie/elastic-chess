import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Chessboard extends Component {
    render() {
        return (
            <div>Hello, {this.props.game.moves}</div>
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



