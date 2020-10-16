import React,{createContext} from 'react';

export const NewsContext = createContext();

class NewsContextProvider extends React.Component{
    state = {
        news:[
            {id:1,newsContent:'A new kind of processor was invented'},
            {id:2,newsContent:'Facebook now a new kind of design'},
            {id:3,newsContent:'Laptops now a days are much more cheaper than before'},
            {id:4,newContent:'We need to study more'}
        ]
    }
    newsDummy = () =>{
        console.log('This is the newsDummy function');
    }

    render(){
        return(
            <NewsContext.Provider value={{news:this.state.news,newsDummy:this.newsDummy}}>
                {this.props.children}
            </NewsContext.Provider>
        )
    }
}

export default NewsContextProvider;