import React from 'react';
import Table from './components/Table';
import CommentModal from './components/CommentModal';
import movies from './db/movies.json'
import { GlobalStyle } from './utils/styled';

function App() {
  return (
    <div>
      <GlobalStyle />
      {/* <Table movies={movies}/> */}
      <CommentModal movie={{title: "Star wars"}} modalOpen/>
    </div>
  );
}

export default App;
