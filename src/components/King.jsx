import React, { Component } from 'react';
import PropTypes from 'prop-types';

class King extends Component {
    constructor(props) {
        super(props);

        this.calculateCoordinates()
    }

    calculateCoordinates() {
    }

    render() {
        const { color } = this.props;
        return (
            <div className={"King " + color} />
        )
    }
}

King.propTypes = {
    color: PropTypes.isOneOf(["White", "Black"]).isRequired,
    currentSquare: PropTypes.string.isRequired,
    chessboard: PropTypes.object.isRequired
}

export default King;
