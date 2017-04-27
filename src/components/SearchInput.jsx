import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';

import Actions from '../actions';
import '../styles/autosuggest.css';

const buildChessGameDescription = (game) => {
    const date = game.Date.split('-')[0];
    return `${game.White} vs ${game.Black} @ ${game.Event} ${date}`
}

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.getSuggestions = this.getSuggestions.bind(this);
        this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
        this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
        this.state = {
            value: '',
        }
    }

    onChange(event, { newValue }) {
        this.setState({
            value: newValue
        });
    };

    getSuggestions(value) {
        this.props.fetchSuggestions(value)
    }

    getSuggestionValue(suggestion) {
        return buildChessGameDescription(suggestion)
    }

    renderSuggestion(suggestion) {
        return (
            <div>
                {buildChessGameDescription(suggestion)}
            </div>
        )
    }

    // Autosuggest will call this function every time you need to update suggestions.
    onSuggestionsFetchRequested({ value }) {
        this.props.fetchSuggestions(value);
    };
    
    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested() {
        this.props.clearSuggestions();
    }

    render() {
        const { suggestions } = this.props;
        const { value } = this.state;
        const inputProps = {
            placeholder: "Search Grandmaster Chess games by Players and/or Date.",
            value,
            onChange: this.onChange,
            autoFocus: true
        }
        return (
            <Autosuggest
                highlightFirstSuggestion={true}
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                onSuggestionSelected={(e, { suggestion }) => {
                    this.props.selectSuggestion(suggestion);
                }}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
        )
    }
}

SearchInput.propTypes = {
    suggestions: PropTypes.array.isRequired,
    fetchSuggestions: PropTypes.func.isRequired,
    clearSuggestions: PropTypes.func.isRequired
}

function mapStateToProps(store) {
    return {
        suggestions: store.suggestions
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchSuggestions: (value) => {
            dispatch(Actions.fetchSuggestions(value))
        },
        clearSuggestions: () => {
            dispatch(Actions.clearSuggestions());
        },
        selectSuggestion: (suggestion) => {
            dispatch(Actions.selectGame(suggestion));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
