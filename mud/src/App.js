import React, { Component } from 'react'; 
import Game from "./Components/Game/Game"
import {Route} from "react-router-dom"; 
import Authenticate from "./Components/Authentication/Authenticate"
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
      <Game/>
      </div>
    );
  }
}

export default Authenticate(App);