import React, {Component} from 'react';

import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1 style={headerStyle}>Covid-19 Tracker</h1>
      </div>
    );
  }
}

const headerStyle = {
  background: '#ccc',
  textAlign:'center'

}
export default App;
