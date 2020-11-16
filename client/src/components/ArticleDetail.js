import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import spinner from "../tenor.gif";


const ArticleDetail = (props) => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [recipe, setRecipe] = useState('');
    const [fileName, setFileName] = useState('');


    useEffect(() => {
        axios.get(`/articles/${props.match.params.id}`)
        .then(res => [
            setTitle(res.data.title),
            setIngredients(res.data.ingredients),
            setRecipe(res.data.recipe),
            setFileName(res.data.articleImage)
        ])
        .catch(err => console.log(err));
    }, [props])

    return (
        <DetailContainer>
            {!title || !ingredients || !recipe ? (
                <img src={spinner} alt=".." className="spinner" />
            ) : (
                <>
                    <img src={`/uploads/${fileName}`} alt="..."
                    style={{margin:"0 auto", width:"70%", display:"flex", borderRadius:"6rem" }}
                    />

                    <h2>{title}</h2>
                    <p><strong>Ingredients:</strong> {ingredients}</p>
                    <span><strong>Recipe:</strong> {recipe}</span>
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
    .spinner {
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
