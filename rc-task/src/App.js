import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './demo';
import DataTable from './data-table';
import CustomMap from "./components/CustomMap";
import NavBar from "./components/NavBar";

class App extends React.Component {
  state = {
    markers: []
  };

  constructor(props) {
    super(props);
    this.state = { markers: null };
    this.onSettingsChanged = this.onSettingsChanged.bind(this);
  }

  onSettingsChanged(data) {
    this.setState({ data: data.val() });
    console.log("data fetched:", data.val());
  }

 render() {
  const { markers } = this.state;
  return (
    <div className="App">
      <Demo />
      <DataTable />
      <NavBar />
        <CustomMap markers={markers} />
    </div>
  );
}

}

export default App;
