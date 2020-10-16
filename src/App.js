import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import FetchTitleData from './components/FetchTitleData';
import FetchPostData from './components/FetchPostData';
import ClearData from './components/ClearData';
import RenderPostData from './components/RenderPostData';
import RenderTitleData from './components/RenderTitleData';
import Home from './components/Home';
import News from './components/News';
import Posts from './components/Posts';
import NewsPosts from './components/NewsPosts';
//contexts
import NewsContextProvider from './contexts/NewsContext';
import PostsContextProvider from './contexts/PostContext';




const App = () =>{
  return(
    <Provider store={store}>
      <BrowserRouter>
        <div className="appContent">
          <h2 className="mainHeading">This is the Main App component</h2>
          <h3 className="mainHeading">
            This application uses axios to fetch data from REST api and stores them in
            Redux store. After that it fetches data from redux store and 
            renders it to the DOM.
          </h3>

          <NewsContextProvider>
            <PostsContextProvider>
              <News />
              <Posts />
              <NewsPosts />
            </PostsContextProvider>
          </NewsContextProvider>

          <NavBar />
          <Route exact path="/" component={Home} />
          <Switch>
            <Route exact path="/fetchTitleData" component={FetchTitleData} />
            <Route exact path="/fetchPostData" component={FetchPostData} />
            <Route exact path="/cleardata" component={ClearData} />
            <Route exact path="/renderPostData" component={RenderPostData} />
            <Route exact path="/renderTitleData" component={RenderTitleData} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
    
  )
}

export default App;
