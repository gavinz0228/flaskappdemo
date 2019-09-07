import React from 'react';
import { Button, Navbar, Form, Nav, NavDropdown, FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import {Route, HashRouter, Redirect } from 'react-router-dom'
import {Upload} from './Upload'
import FileManager from './FileManager'

function Admin() {
  return (
        <HashRouter>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Data Admin</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <LinkContainer to="/upload">
                  <Nav.Link>Upload File</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/file_manager">
                  <Nav.Link>File Manager</Nav.Link>
                </LinkContainer>

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
          <div>
          <Redirect from="/" exact to="/upload" />
          <Route path="/upload" component={Upload}/>
          <Route path="/file_manager" component={FileManager}/>
          </div>
        </HashRouter>
  );
}

export default Admin;
