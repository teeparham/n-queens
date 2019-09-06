import React from 'react';
import './App.css';
import Container from './Container';

const App: React.FC = () => {
  return (
    <div className="App bg-black-80">
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>
      <header className="">
        <h1>N Queens</h1>
      </header>
      <Container />
    </div>
  );
};

export default App;
