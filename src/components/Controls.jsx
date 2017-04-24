import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Actions from '../actions';
import '../styles/controls.css';

class Controls extends Component {
    constructor(props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidMount() {
        document.onkeydown = this.handleKeyDown;
    }
    handleKeyDown(evt) {
        if (evt.keyCode == 37) {
            this.props.onBack();
        } else if (evt.keyCode == 39) {
            this.props.onForward();
        }
    }
    render() {
        return (
            <div className="Controls">
                <button type="button"
                    className="Left Button"
                    onClick={this.props.onBack}
                >&larr;
                </button>
                <button type="button"
                    className="Right Button"
                    onClick={this.props.onForward}
                >&rarr;
                </button>
            </div>
        )
    }
}

Controls.propTypes = {
    onBack: PropTypes.func.isRequired,
    onForward: PropTypes.func.isRequired,
}

function mapDispatchToProps(dispatch) {
    return {
        onBack: () => {
            dispatch(Actions.playPreviousMove());
        },
        onForward: () => {
            dispatch(Actions.playNextMove());
        }
    }
}

export default connect(null, mapDispatchToProps)(Controls);
