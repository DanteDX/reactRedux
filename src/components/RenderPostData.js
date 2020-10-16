import React from 'react';
import {connect} from 'react-redux';

const RenderPostData = ({fetchedPostData}) => {
    const data = fetchedPostData.postData.slice(0,10);
    const renderedPost = data.map(post =>{
        return(
            <li key={post.id}>
                {post.title}
            </li>
        )
    });
    
    return (
        <ul>
            {renderedPost}
        </ul>
    )
}


const mapStateToProps = state =>({
    fetchedPostData:state.fetchpostdataReducer
})

export default connect(mapStateToProps)(RenderPostData);
