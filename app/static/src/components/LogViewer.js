import React from 'react';
import {Nav, ListGroup, Container} from 'react-bootstrap'

export class LogViewer extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Container>
          <Nav variant="tabs" defaultActiveKey="processingError">
              <Nav.Item>
                  <Nav.Link eventKey="processingError">Processing Error</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="incompletedUploadTasks">Current Incompleted Upload Task</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="processingTasks" > Current Processing Tasks</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="completedUploadTasks" > Completed UploadTasks</Nav.Link>
              </Nav.Item>
          </Nav>
          <ListGroup>
              <ListGroup.Item>Task1
                <ListGroup>
                    <ListGroup.Item>
                      Upload 1
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Upload 2
                    </ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
          </ListGroup>
      </Container>
      );
  }
}
export default LogViewer;

