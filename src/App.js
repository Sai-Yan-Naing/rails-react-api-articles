import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import { Container, Table, Row, Col, Navbar,NavDropdown,Nav,Form,FormControl, Button } from 'react-bootstrap';

import {BrowserRouter,NavLink, Router, Route, Redirect, Switch, Link } from 'react-router-dom';

import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Navigation from './components/Navigation';
import Details from './components/Details';

import logo from './images/black-logo.svg';

class App extends React.Component {

     render() {
            return (
                <div className="App">
                <Navbar bg="light" expand="lg">
                  <Navbar.Brand href="/">
                    <img src={logo} width='30' height='30' />
                  </Navbar.Brand>
                      <Navbar.Brand href="/about">About</Navbar.Brand>
                      <Navbar.Brand href="/contact">Contact Us</Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                          <Nav.Link href="#link">Link</Nav.Link>
                          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                          </NavDropdown>
                        </Nav>
                        <Form inline>
                          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                          <Button variant="outline-success">Search</Button>
                        </Form>
                      </Navbar.Collapse>
                  </Navbar>
                    <Container fluid className="mt-5">
                            <BrowserRouter>
                              <div>
                                  <Switch>
                                   <Route path="/" component={Home} exact/>
                                   <Route path="/about" component={AboutUs}/>
                                   <Route path="/contact" component={ContactUs}/>
                                 </Switch>
                              </div> 
                            </BrowserRouter>
                    </Container>
                </div>
            );
    }
}

export default App;
