import React from 'react';
import {ListGroup} from 'react-bootstrap'
import { UploadInfoItem} from './UploadInfoItem'

export class UploadTaskItem extends React.Component {
    constructor(props){
        super(props);
        this.state={
            uploadTask: null,
        }
    }
    componentDidMount(){
        this.setState(
            {
                uploadTask: this.props.uploadTask,
            }
        );
    }
    render(){
        if(!this.state.uploadTask)
            return (<div></div>)
        const uploadInfo = this.state.uploadTask.files.map(f => <UploadInfoItem uploadInfo={f} key={f.uploadId} />)
        if(!this.state.uploadTask)
            return (<div></div>)
        return (
            <ListGroup.Item>Upload Task Id: {this.state.uploadTask.taskId} File nums: {this.state.uploadTask.fileNum} Device Type: {this.state.uploadTask.deviceType}
            <ListGroup>
                {uploadInfo}
            </ListGroup>
          </ListGroup.Item>
        );
    }
}