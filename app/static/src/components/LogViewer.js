import React from 'react';
import {Nav, ListGroup, Container} from 'react-bootstrap'
import {FileUploadApi} from '../api/FileUploadApi'
import {UploadInfoItem} from './UploadInfoItem'
import { UploadTaskItem } from './UploadTaskItem';
export class LogViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {uploadTasks:[]}
  }
  componentDidMount(){
    FileUploadApi.getAllUploadTasks()
      .then(res=>{
        this.setState({uploadTasks: res.data.data})
      })
      .catch(err=>{
        console.log(err);
      });
  }
  render(){
    const uploadTasks = this.state.uploadTasks.map(ut => <UploadTaskItem  uploadTask = {ut} key={ut.taskId} />)
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
          <ListGroup style={{textAlign:"left"}}>
            {uploadTasks}
          </ListGroup>
      </Container>
      );
  }
}
export default LogViewer;

