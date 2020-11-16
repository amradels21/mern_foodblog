import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import spinner from "../tenor.gif"

const ArticleDetail = (props) => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [recipe, setRecipe] = useState('');

    useEffect(() => {
        axios.get(`/articles/${props.match.params.id}`)
        .then(res => [
            setTitle(res.data.title),
            setIngredients(res.data.ingredients),
            setRecipe(res.data.recipe)
        ])
        .catch(err => console.log(err));
    }, [props])

    return (
        <DetailContainer>
            {!title || !ingredients || !recipe ? (
                <img src={spinner} alt=".." />
            ) : (
                <>
                    <h2>{title}</h2>
                    <p>{ingredients}</p>
                    <span>{recipe}</span>
                    <br/>
                    <div >
                    <Link to="/" className="btn btn-primary">Back to Home</Link>
                    </div>
                </>
            )}
            

        </DetailContainer>
    )
}

export default ArticleDetail;

const DetailContainer = styled.div`
    margin: 6rem auto;
    padding: 3rem 14rem;
    h2 {
        text-align: center;
        font-weight: 900;
        color: var(--dark-green);
    }
    img {
        display: block;
        margin: 0 auto;
        height: 2rem;

    }
    .btn-primary {
        background: var(--dark-green);
        border: none;
        &:hover {
            background: var(--light-green);
        }
    }
`;
