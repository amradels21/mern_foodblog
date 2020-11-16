import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layouts/Header';
import AppNavbar from './components/layouts/AppNavbar';
import Articles from './components/Articles';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';



function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/articles')
    .then(res => setPosts(res.data))
    .catch(err => console.log(err));
  }); 
  return (
    <div className="App">
      <Header />
      <AppNavbar />
      <Route to="/" render={() => <Articles posts={posts} />} />
    </div>
  );
}

export default App;
