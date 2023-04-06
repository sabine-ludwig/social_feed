import './App.css';
import React, { useState } from 'react';
import PostList from './Components/Posts/PostList';
import NavBar from './Components/NavBar/NavBar';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';

function App() {

  const [entries, Setentries] = useState([{userName: 'Sabine', post: 'I like to code'}])


  function newPost(post) {
    let tempPost = [...entries, post];
    Setentries(tempPost);
  }

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div>
        <CreatePostForm newPost={newPost}/>
      </div>
      <div>
        <PostList entries={entries}/>
      </div>
    </div>
  );
}

export default App;
