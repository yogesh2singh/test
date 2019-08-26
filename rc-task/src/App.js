import React from 'react';
import './App.css';
import IntegrationAutoSuggest from './integration-auto-suggest';
import DataTable from './data-table';
import CustomMap from "./components/CustomMap";

class App extends React.Component {
  state = {
    markers: []
  };
  selectionType = '';
  selectionValue = '';

  constructor(props) {
    super(props);
    this.state = { markers: null };
    this.onSettingsChanged = this.onSettingsChanged.bind(this);
  }

  onSettingsChanged(data) {
    this.setState({ data: data.val() });
    console.log("data fetched:", data.val());
  }

  handleClick(event) {
    if(event.length > 0) {
      this.selectionType = event[0].type;
      this.selectionValue = event[0].label;
    }
    this.setState({
      type: this.selectionType
    })
  }

 render() {
  const { markers } = this.state;
  return (
    <div className="App">
      <IntegrationAutoSuggest onAutoSuggestionSelect={ this.handleClick.bind(this) } />
      { this.selectionType === 'Name' ? <DataTable />: null }
      { this.selectionType === 'Map' ? <CustomMap markers={markers} onAutoSuggestionSelect={ this.handleClick.bind(this) } markerValue={this.selectionValue} />: null }
    </div>
  );
}

}

export default App;
