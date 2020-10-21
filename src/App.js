import React from 'react';
import Table from './components/Table';
import Comment from './components/Comment';
import movies from './db/movies.json'

function App() {
  return (
    <div>
      {/* <Table movies={movies}/> */}
      <Comment movie={{title: "test"}}/>
    </div>
  );
}

export default App;
