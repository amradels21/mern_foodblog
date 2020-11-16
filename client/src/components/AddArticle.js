import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AddArticle = () => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [recipe, setRecipe] = useState("");

    const changeOnClick = e => {
        e.preventDefault();
        const articles = {
            title,
            ingredients,
            recipe
        }
        setTitle('');
        setIngredients('');
        setRecipe('');
        
        axios.post('/articles/add', articles)
            .then( res => console.log(res.data))
            .catch(err => console.log(err));
    }
    return (
        <AddArticleContainer>
            <div className="container">
                <h1> Add New Dish</h1>
                <form onSubmit={changeOnClick} encType="multipart/form-data">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                         type="text" 
                         value={title}
                         className="form-control" 
                         onChange={ e => setTitle(e.target.value)}
                         placeholder="Enter title"
                         />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ingredients">Ingredients</label>
                        <input 
                            type="text"
                            value={ingredients}
                            onChange={ e => setIngredients(e.target.value)}
                            className="form-control"
                            placeholder="Ingredients"
                            />
                    </div>
                    <div className="form-group">
                        <label className="form-check-label" htmlFor="recipe">Recipe</label>
                        <textarea
                          value={recipe}
                          onChange={ e => setRecipe(e.target.value)}
                          className="form-control"
                          rows="3"/>

                    </div>
                    <button type="submit" className="btn btn-primary">Post Dish</button>
                </form>
            </div>

        </AddArticleContainer>

    )
}
export default AddArticle;

const AddArticleContainer = styled.div`
    margin: 3rem auto;
    padding: 4rem;
    width: 31.25rem;

    h1 {
        font-weight: 900;

    }
    .btn-primary {
        margin-top: 2rem;
        background: var(--dark-green);
        border: none;
        &:hover {
            background: var(--light-green);
        }
    }

`;