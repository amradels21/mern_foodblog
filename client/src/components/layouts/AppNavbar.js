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
                        <Container>
                            <NavbarBrand href = "/">Cooking Recipes</NavbarBrand>
                            <NavbarToggler onClick={this.toggle}></NavbarToggler>
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className= "ml-auto" navbar>
                                    <NavItem>
                                        <NavLink>
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>
                                            New Article
                                        </NavLink>
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