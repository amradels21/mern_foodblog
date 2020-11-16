import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layouts/Header';
import AppNavbar from './components/layouts/AppNavbar';
import Articles from './components/Articles';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';
import AddArticle from './components/AddArticle';
import ArticleDetail from './components/ArticleDetail';
import ArticleEdit from './components/ArticleEdit';



function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('/articles')
    .then(res => setPosts(res.data))
    .catch(err => console.log(err));
  }); 
  return (
    <div className="App">
      <Header />
      <AppNavbar />
      <Route exact path="/" render={() => <Articles posts={posts} />} />
      <Route  path="/article/:id" render={(props) => <ArticleDetail {...props} posts={posts} />} />
      <Route  path="/update/:id" render={(props) => <ArticleEdit {...props} posts={posts} />} />
      <Route path="/add-article" component={AddArticle} />

    </div>
  );
}

export default App;
