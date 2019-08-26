import React from 'react';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const suggestions = [
  { label: 'America', type:"Name" },
  { label: '18.5247663,73.7929271', type:"Map" },
  { label: '12.9542946,77.4908537', type:"Map" },
  { label: 'Algeria', type:"Name"},
  { label: 'India', type:"Name" },
  { label: 'Andorra', type:"Name" },
  { label: 'Angola', type:"Name" },
  { label: 'Anguilla', type:"Name" },
  { label: 'Antarctica', type:"Name" },
  { label: 'Antigua and Barbuda', type:"Name" },
  { label: 'Argentina', type:"Name" },
  { label: 'Armenia', type:"Name" },
  { label: 'Australia', type:"Name" },
  { label: 'Austria', type:"Name" },
  { label: 'Azerbaijan', type:"Name" },
  { label: 'Bahamas', type:"Name" },
  { label: 'Bahrain', type:"Name" },
  { label: 'Bangladesh', type:"Name" },
  { label: 'Barbados', type:"Name" },
  { label: 'Belarus', type:"Name" },
  { label: 'Belgium', type:"Name" },
  { label: 'Belize', type:"Name" },
  { label: 'Bermuda', type:"Name" },
  { label: 'Bhutan', type:"Name" },
  { label: 'Bolivia, Plurinational State of', type:"Name" },
  { label: 'Bonaire, Sint Eustatius and Saba', type:"Name" },
  { label: 'Bosnia and Herzegovina', type:"Name" },
  { label: 'Botswana', type:"Name" },
  { label: 'Bouvet Island', type:"Name" },
  { label: 'British Indian Ocean Territory', type:"Name" },
  { label: 'Brunei Darussalam', type:"Name" },
];

function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input,
        },
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map(part => (
          <span key={part.text} style={{ fontWeight: part.highlight ? 500 : 400 }}>
            {part.text}
          </span>
        ))}
      </div>
    </MenuItem>
  );
}

function getSuggestions(value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function getSelectedSuggestion(value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;
  let selectedItem = '';
  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
          selectedItem = suggestion;
        }

        return selectedItem;
      });
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

const useStyles = makeStyles(theme => ({
  root: {
    height: 60,
    flexGrow: 1,
    width: '50%',
    margin: '0 auto',
  },
  container: {
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  divider: {
    height: theme.spacing(2),
  },
}));

export default function IntegrationAutosuggest(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    single: '',
  });
  let selectedVal = '';

  const [stateSuggestions, setSuggestions] = React.useState([]);

  const handleSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handleChange = name => (event, { newValue }) => {
    setState({
      ...state,
      [name]: newValue,
    });
    if(newValue.length > 5) {
      selectedVal = getSelectedSuggestion(newValue);
      props.onAutoSuggestionSelect(selectedVal);
    }
  };

  const autosuggestProps = {
    renderInputComponent,
    suggestions: stateSuggestions,
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    getSuggestionValue,
    renderSuggestion,
  };

  return (
    <div className={classes.root}>
      <Autosuggest
        {...autosuggestProps}
        inputProps={{
          classes,
          id: 'react-autosuggest-simple',
          label: 'Auto Suggest',
          placeholder: 'Search a country by Name or enter number to see the Open street Map',
          value: state.single,
          onChange: handleChange('single'),
        }}
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderSuggestionsContainer={options => (
          <Paper {...options.containerProps} square>
            {options.children}
          </Paper>
        )}
      />
      <div className={classes.divider} />
    </div>
  );
}
