import React from 'react';
import styled from 'styled-components';

const Articles = ({ posts }) => {
    return (
        <MainContainer>
            {posts && posts.map((article, key) => (

                    <div className="container">
                        <h2>{article.title}</h2>
                        <p>{article.ingredients}</p>
                        <span>{article.recipe}</span>

                        <div className="row my-3">
                            <div className="col-sm-2">
                                <a href="" className="btn btn-outline-success">Edit Article</a>
                            </div>
                            <div className="col-sm-2">
                                <a href="" className="btn btn-outline-danger">Delete Article</a>
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