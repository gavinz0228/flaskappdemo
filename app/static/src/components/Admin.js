import React from 'react';
import { Button, Navbar, Form, Nav, NavDropdown, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import {Route, HashRouter, Redirect } from 'react-router-dom'
import {FileUploadPanel} from './FileUploadPanel'
import {Dashboard} from './Dashboard'
import {DataManager} from './DataManager'
import {LogViewer} from './LogViewer'

export class Admin extends React.Component {
  constructor(props){
    super(props);

  }
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
                    <Nav.Link>Upload Files</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/admin/dataManager">
                    <Nav.Link>Data Manager</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/admin/logViewer">
                    <Nav.Link>Log Viewer</Nav.Link>
                  </LinkContainer>
                </Nav>
                <Form inline>
                  
                  <NavDropdown title="Hi, Technician1" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">My Upload</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Change Password</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Support</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
                  </NavDropdown>
                </Form>
              </Navbar.Collapse>
            </Navbar>
            <Container style={{paddingTop: 50}}>
              <Redirect from="/admin" exact to="/admin/dashboard" />
              <Route path="/admin/dashboard" component={Dashboard}/>
              <Route path="/admin/upload" component={FileUploadPanel}/>
              <Route path="/admin/dataManager" component={DataManager}/>
              <Route path="/admin/logViewer" component={LogViewer}/>
            </Container>
          </HashRouter>
    );
  }
}
