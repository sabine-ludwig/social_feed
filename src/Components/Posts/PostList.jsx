// Within the PostList component, create the feed where all your posts will 
// be displayed in your app. All posts should be passed into this 
// component using props. Then, utilize the “map” higher order array 
// method to map each post to its own Post component.

import Post from './Post'

const PostList = (props) => {
    return (
        <div>
            {props.entries.map((entry, index) => <Post entry={entry} key={index}/>)
            .reverse()}
        </div>
     );
}
 
export default PostList;