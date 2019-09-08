import React from 'react';
import { Button, Navbar, Form, Nav, FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import {Route, HashRouter, Redirect } from 'react-router-dom'
import {Upload} from './Upload'
import {Dashboard} from './Dashboard'
import DataManager from './DataManager'

export class Admin extends React.Component {
  render(){
    return (
          <HashRouter>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand >Data Admin</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <LinkContainer to="/admin/dashboard">
                    <Nav.Link>Dashboard</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/admin/upload">
                    <Nav.Link>Upload File</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/admin/data_manager">
                    <Nav.Link>Data Manager</Nav.Link>
                  </LinkContainer>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
            <div>
              <Redirect from="/admin" exact to="/admin/dashboard" />
              <Route path="/admin/dashboard" component={Dashboard}/>
              <Route path="/admin/upload" component={Upload}/>
              <Route path="/admin/data_manager" component={DataManager}/>
            </div>
          </HashRouter>
    );
  }
}

export default Admin;
