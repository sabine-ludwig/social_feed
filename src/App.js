import React, { useState } from 'react';
import PostList from './Components/PostList';
import NavBar from './Components/NavBar';
import CreatePostForm from './Components/CreatePostForm';

function App() {

  const [posts, setPosts] = useState([{Name: 'Sabine', Post: 'I like to code'}])

  return (
    <div>
      <NavBar />
      <CreatePostForm />
      <PostList parentPosts={posts} />
    </div>
  );
}

export default App;
