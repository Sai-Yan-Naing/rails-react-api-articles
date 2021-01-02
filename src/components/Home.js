import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import { Container, Table, Row, Col } from 'react-bootstrap';

import {BrowserRouter,NavLink, Router, Route, Redirect, Switch, Link} from 'react-router-dom';

import Details from './Details';

class Home extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
        items: [],
        isLoaded: false,
      }
    }


  componentDidMount()
  {
    fetch('https://rails-backend-api-test.herokuapp.com/api/v1/articles')
    .then(res => res.json())
    .then(json => {
        this.setState({
            isLoaded: true,
            items: json,
            });
        });
  }

     render() {

        var { isLoaded, items } = this.state;

        if(!isLoaded){
            return <div>Loading .......</div>;
        }else{
            return (
                <div className="App">
                    <div className="text-center display-4"><b>React JS Fetch Data from Rail API</b></div>
                        <ul>
                            {items.data.map( item => (
                                <li key={item.id}>{item.title}</li>
                                ))}
                        </ul>
                        <Row>
                            <Col sm={6}>Status => {items.status}</Col>
                            <Col sm={6}>Message =>  {items.message}</Col>
                        </Row>
                        <Table  striped bordered hover className="mt-2" size="sm">
                              <thead>
                                <tr>
                                  <th>No</th>
                                  <th>Title</th>
                                  <th>Body</th>
                                </tr>
                              </thead>
                              <tbody>
                              {items.data.map( item => (

                                <tr key={item.id} >
                                  <td><Link to={'/details/1'}>{item.id}</Link></td>
                                  <td>{item.title}</td>
                                  <td>{item.body}</td>
                                </tr>
                                ))}

                              </tbody>
                            </Table>
                            <Route path="/details/:id" component={Details}/>
                </div>
            );
        }
    }
}

export default Home;
