import React from 'react';
import logo from './logoReddit.svg';
import Header from './features/Header/Header';
import './App.css';
import Subreddits from './features/Subreddits/Subreddits';
import Home from './features/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home/>
      </main>
    </div>
  );
}

export default App;
