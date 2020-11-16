import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Card, CardImg, CardTitle,CardBody, Button, Container } from 'reactstrap';
import "./Box.css";
import spinner from "../tenor.gif";


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
                                    <div className="col-sm-7" style={{margin:"0.1rem", padding:"0rem 2rem 1rem"}}>
                                        <Link to={`/update/${article._id}`} className="btn btn-outline-success"><span className="fa fa-pencil fa-lg"></span> Edit Article</Link>
                                    </div>
                                    <div className="col-sm-7" style={{margin:"0.1rem" , padding:"0rem 2rem 1rem"}}>
                                        <button onClick={() => deleteDish(article._id)} className="btn btn-outline-danger"><span className="fa fa-trash fa-lg"></span> Delete Article</button>
                                    </div>
                                </div>
                        </Card>
                        
                       
                        
                        

                    </div>
                </Container>
                
                ))}
        </MainContainer>
    )
}

export default Articles;

const MainContainer = styled.div`
    margin: 7rem 0;
  
    
`;