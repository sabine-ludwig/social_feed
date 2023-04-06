// Within the CreatePostForm component create a form with 2 input fields. 
// There should be an input field for the user’s name, as well as the body of their post, 
// and each should be bound to its own state variable.

// Implement a handleSubmit method for your form, which should pass the entered 
// values to a function on the App.jsx component. That function should create a new 
// post object, add it to the existing array of posts, and update the App.js 
// state variable with the new array.

import React, {useState} from "react";

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
        <form onSubmit={handleSubmit}>
            <div>
                <label for="username">User Name</label>
                <input type="text" id="username" placeholder="Username" value={userName} onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div>
                <label for="post">What's on your mind...</label>
                <textarea id="post" rows="3" value={post} onChange={(event) => setPost(event.target.value)}/>
            <button type="submit">Post</button>
            </div>
           
        </form>
      );
}
 
export default CreatePostForm;
