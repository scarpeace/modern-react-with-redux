import React from 'react';
import CommentDetail from "./CommentDetail"
import './App.css';

function App() {
  return (
    <div className="App">
      <CommentDetail author="Sam"/>
      <CommentDetail author="Alex"/>
      <CommentDetail author="Jane"/>
    </div>
  );
}

export default App;
