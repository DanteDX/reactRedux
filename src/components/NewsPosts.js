import React,{useContext} from 'react';
import {PostContext} from '../contexts/PostContext';
import {NewsContext} from '../contexts/NewsContext';

const NewsPosts = () =>{
        const {posts,postDummy} = useContext(PostContext);
        const {news,newsDummy} = useContext(NewsContext);
        console.log('post and news combined');
        console.log(posts);
        console.log(news);
        postDummy();
        newsDummy();
        return(
            <div className="newsPostsContent">
                <hr/>
                <p>News and posts contents over here</p>
            </div>
        )
    
}

export default NewsPosts;

// const NewsPosts = () =>{
//         return(
//             <PostContext.Consumer>{(postContext) => (
//                 <NewsContext.Consumer>{(newsContext) =>{
//                     const {posts,postDummy} = postContext;
//                     const {news,newsDummy} = newsContext;
//                     console.log('post and news combined');
//                     console.log(posts);
//                     console.log(news);
//                     postDummy();
//                     newsDummy();
//                     return(
//                         <div className="newsPostsContent">
//                             <hr/>
//                             <p>News and posts contents over here</p>
//                         </div>
//                     )}}
//                 </NewsContext.Consumer>
//             )}
//             </PostContext.Consumer>
//         )
// }

// export default NewsPosts;