import React, { Component } from 'react';
import './App.css';

// import component
import Profile from './components/Organism/profile/Profile';
import Navbar from './components/Organism/navbar/Navbar';
import { NextMeetup } from './components/Organism/next-meetup/nextMeetup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Profile/>
        <NextMeetup/>

      </div>
    )
  }
}


export default App;
