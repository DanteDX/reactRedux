import React from 'react';
import {NewsContext} from '../contexts/NewsContext';

class News extends React.Component{
    static contextType = NewsContext;
    render(){
        const {news,newsDummy} = this.context;
        console.log(news);
        newsDummy();
        const newsContent = news.map(nw =>{
            return(
                <p key={nw.id}>{nw.newsContent}</p>
            )
        });
        return(
            <div className="newsContent">
                this is the news component
                {newsContent}
                <hr />
            </div>
        )
    }
}

export default News;