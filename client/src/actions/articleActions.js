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

export const deleteArticle = id => (dispatch, getState) => {
    console.log('Action');

    axios
    .delete(`/articles/${id}`)
    .then(res => dispatch({
        type: DELETE_ARTICLE,
        payload: id
    }))
    .catch(err => console.log(err));
 }