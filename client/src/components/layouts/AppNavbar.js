import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
    NavLink
 } from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
    render(){
        return (
            <div>
                <Navbar color="dark" dark expand= "sm" className = "mb-5">
                        <Container fluid>
                            <NavbarBrand href = "/">My Cooking Recipes</NavbarBrand>
                            <NavbarToggler onClick={this.toggle}></NavbarToggler>
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className= "ml-auto" navbar>
                                    <NavItem>
                                        <NavLink href="/"><span className="fa fa-home fa-lg"/>
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/add-article">Add Recipe</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Container>
                    </Navbar>
            </div>
        )
    }
    
}

export default  AppNavbar;