import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const Articles = ({ posts }) => {
    return (
        <MainContainer>
            {posts && posts.map((article, key) => (

                    <div className="container" key={key}>
                        <h2>{article.title}</h2>
                        <p>{article.ingredients}</p>
                        <span>{article.recipe}</span>

                        <div className="row my-3">
                            <div className="col-sm-2">
                                <Link to="/edit-article" className="btn btn-outline-success">Edit Article</Link>
                            </div>
                            <div className="col-sm-2">
                                <Link to="/" className="btn btn-outline-danger">Delete Article</Link>
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