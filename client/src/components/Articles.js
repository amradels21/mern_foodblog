import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Card, CardImg, CardTitle,CardBody, Container, Button, ButtonGroup } from 'reactstrap';
import "./Box.css";

import { getArticles } from '../actions/articleActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';    





const Articles = ({ posts }) => {
    const [title, setTitle] = useState([]);
    //Delete by Id
    const deleteDish = id => {
        axios.delete(`/articles/${id}`)
            .then(res => alert(res.data));
            setTitle(title.filter(elem => elem._id !== id));
    }

    return (
        <MainContainer className="grid">
            {posts && posts.map((article, key) => (
                <Container fluid>
                    <div className="col-12" key={key}>
                        

                        <Card className="box shadow">
                            <Link to={{
                                    pathname: `/article/${article._id}`
                                                            }}>
                            <CardImg width="50%" src={`/uploads/${article.articleImage}`} alt={article.name} />
                                <CardBody>
                                <CardTitle tag="h5">{article.title}</CardTitle>

                                </CardBody>
                            </Link>

                                <div className="row">
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <div className="col-sm-7" style={{margin:"0.1rem", padding:"0rem 2rem 1rem"}}>
                                                <Link to={`/update/${article._id}`} className="btn btn-outline-success"><span className="fa fa-pencil fa-lg"></span> Edit</Link>
                                        </div>
                                        <div className="col-sm-7" style={{margin:"0.1rem" , padding:"0rem 1rem 1rem 5rem", marginRight:"2rem"}}>
                                                <button onClick={() => deleteDish(article._id)} className="btn btn-outline-danger"><span className="fa fa-trash fa-lg"></span> Delete</button>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                        </Card>
                        
                       
                        
                        

                    </div>
                </Container>
                
                ))}
        </MainContainer>
    )
}

Articles.propTypes = {
    getArticles: PropTypes.func.isRequired,
    article: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    article: state.article
});

export default connect(mapStateToProps,{getArticles})(Articles);

const MainContainer = styled.div`
    margin: 7rem 0;
  
    
`;