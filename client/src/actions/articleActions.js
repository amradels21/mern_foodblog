import axios from 'axios';
import {GET_ARTICLES, ADD_ARTICLE, DELETE_ARTICLE, UPDATE_ARTICLE} from './types';


export const getArticles = () => dispatch => {
    axios
    .get('/articles')
    .then(res =>
        dispatch({
            type: GET_ARTICLES,
            payload: res.data
        }))
       
      
  }