import {GET_ARTICLES, ADD_ARTICLE, DELETE_ARTICLE, UPDATE_ARTICLE} from '../actions/types';

const initialState = {
    articles: []
}


export default function(state = initialState, action){

    switch (action.type) {
        case GET_ARTICLES:
            return{
                ...state,
                articles: action.payload

            };
        case DELETE_ARTICLE:
            console.log('Reducer');
            return{
                ...state,
                articles: state.articles.filter(article => article._id !== action.payload)
            };
        case ADD_ARTICLE:
            return{
                ...state,
                articles: [action.payload, ...state.articles]
            };       
        default:
            return state;
    }
}