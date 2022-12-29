import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
// import Post from './Post';


function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="app__body">
        <Sidebar/>
        <Feed/>
      </div>
      
    </div>
  );
}

export default App;
