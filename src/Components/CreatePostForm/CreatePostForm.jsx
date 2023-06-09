// Within the CreatePostForm component create a form with 2 input fields. 
// There should be an input field for the user’s name, as well as the body of their post, 
// and each should be bound to its own state variable.

// Implement a handleSubmit method for your form, which should pass the entered 
// values to a function on the App.jsx component. That function should create a new 
// post object, add it to the existing array of posts, and update the App.js 
// state variable with the new array.

import React, {useState} from "react";
import './CreatePostForm.css'

const CreatePostForm = (props) => {

    const [userName, setUsername] = useState('')
    const [post, setPost] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            userName: userName,
            post: post
        };
        props.newPost(newPost);

        setUsername('');
        setPost('');
    }

    return (
        <form onSubmit={handleSubmit} className="container-form">
            <div className="container">
                <label for="username">Name</label>
                <input type="text" class="form-control input-border" id="username" placeholder="Name" value={userName} onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div className="container post-text">
                <label for="post">Post</label>
                <textarea class="form-control input-border" id="post" placeholder="What's on your mind..." rows="3" value={post} onChange={(event) => setPost(event.target.value)}/>
            <button type="submit" className="submit-button" >Post</button>
            </div>
        </form>
      );
}
 
export default CreatePostForm;
