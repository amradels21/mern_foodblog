import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import axios from 'axios';

const Articles = ({ posts }) => {
    const [title, setTitle] = useState([]);
    //Delete by Id
    const deleteDish = id => {
        axios.delete(`/articles/${id}`)
            .then(res => alert(res.data));
            setTitle(title.filter(elem => elem._id !== id));
    }

    return (
        <MainContainer>
            {posts && posts.map((article, key) => (

                    <div className="container" key={key}>
                        <Link to={{
                            pathname: `/article/${article._id}`
                        }}>
                            <h2>{article.title}</h2>
                        </Link>
                        <p>{article.ingredients}</p>
                        <span>{article.recipe}</span>

                        <div className="row my-3">
                            <div className="col-sm-2">
                                <Link to={`/update/${article._id}`} className="btn btn-outline-success">Edit Article</Link>
                            </div>
                            <div className="col-sm-2">
                                <button onClick={() => deleteDish(article._id)} className="btn btn-outline-danger">Delete Article</button>
                            </div>
                        </div>

                    </div>
                
                ))}
        </MainContainer>
    )
}

export default Articles;

const MainContainer = styled.div`
    margin: 7rem 0;
`;