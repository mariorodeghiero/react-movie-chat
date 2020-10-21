import React from 'react';
import './App.css';
import Table from './components';
import movies from './db/movies.json'

function App() {
  return (
    <div className="App">
      <Table movies={movies}/>
    </div>
  );
}

export default App;
