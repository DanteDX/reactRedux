import React from 'react';
import {PostContext} from '../contexts/PostContext';

class Posts extends React.Component{
    static contextType = PostContext;
    render(){
        const {posts,postDummy} = this.context;
        console.log(posts);
        postDummy();
        const postContent = posts.map(pt => {
            return(
                <p key={pt.id}>{pt.postContent}</p>
            )
        });
        return(
            <div className="postsContent">
                this is the posts component
                {postContent}
                <hr />
            </div>
        )
    }
}

export default Posts;