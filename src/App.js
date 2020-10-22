import React from 'react';
import Table from './components/Table';
import CommentModal from './components/CommentModal';
import Header from './components/Header';
import movies from './db/movies.json'
import { GlobalStyle } from './utils/styled';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header title="Movie chat application"/>
      <Table movies={movies}/>
      {/* <CommentModal movie={{title: "Star wars"}} modalOpen={false}/> */}
    </div>
  );
}

export default App;
