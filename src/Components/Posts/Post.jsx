// Within the Post component create a template of how you 
// would like each individual post to be displayed. 
// This will include the user’s name, the body of the post, and the “like” and “dislike” buttons.

// Lastly, you will need to build out the “like” and “dislike” functionality. 
// Within the Post component, create 2 separate functions – one for when the “like” 
// button is clicked, and one for when the “dislike” button is clicked. Bind these 
// functions to their respective buttons onClick event. Within these functions, 
// start to lay out the steps that need to occur when each button is clicked.

// 💡 Note: this user story may be a bit more complex than it seems on the surface! 
// This will require some creative thinking and problem-solving. Be sure to review 
// the Changing Styles on Button Click demo video for more information about how 
// to approach this user story!

// import CreatePostForm from "./CreatePostForm";

import React, {useState} from 'react';
import './Posts.css'

const Post = (props) => {

    const[like, setLike] = useState('inactive')
    const[dislike, setDislike] = useState('inactive')

    function handleLikeClick() {
        if (like === 'inactive') {
            setLike('active')
        }
        if (dislike === 'active') {
            setDislike('inactive')
        }
    }

    function handleDislikeClick() {
        if (dislike === 'inactive') {
            setDislike('active')
        }
        if (like === 'active') {
            setLike('inactive')
        }
    }

    return (
        <section key={props.key} className="container-feed">
            <div className="post-feed">
                <p>{props.entry.userName}</p>
            </div>
            <div className="post-feed">
                <p>Post: {props.entry.post}</p>
            </div>
            <div>
                <button className={'like-button ${like}'} onClick={handleLikeClick}>Like</button>
                <button className={'dislike-button ${dislike}'} onClick={handleDislikeClick}>Dislike</button>
            </div>
        </section>
      );
}
 
export default Post;

  