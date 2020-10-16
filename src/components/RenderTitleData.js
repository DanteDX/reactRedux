import React from 'react';
import {connect} from 'react-redux';

const RenderTitleData = ({fetchedTitleData}) => {
    const data = fetchedTitleData.titleData.slice(0,10);
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
    fetchedTitleData:state.fetchtitledataReducer
})

export default connect(mapStateToProps)(RenderTitleData);
