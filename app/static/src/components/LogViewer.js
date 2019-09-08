import React from 'react';
import {Nav} from 'react-bootstrap'

export class LogViewer extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Nav variant="tabs" defaultActiveKey="processingError">
        <Nav.Item>
          <Nav.Link eventKey="uploadError">Upload Error</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="processingError">Processing Error</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="processingLog" > Current Processing Log</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" > Sucess Log</Nav.Link>
        </Nav.Item>
      </Nav>
      );
  }
}
export default LogViewer;

