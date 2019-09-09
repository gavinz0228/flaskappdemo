import React from 'react';
import { ListGroup} from 'react-bootstrap'


export class UploadInfoItem extends React.Component {
    constructor(props){
        super(props);
        this.state={
            uploadInfo: null,
        }
    }
    componentDidMount(){
        this.setState(
            {
                uploadInfo: this.props.uploadInfo,
            }
        );
    }
    render(){
        if(!this.state.uploadInfo)
            return (<div></div>)
        return (
            <ListGroup.Item className="align-left">
                File Id: {this.state.uploadInfo.uploadId} Archive Path: {this.state.uploadInfo.archivePath} Upload Error: {this.state.uploadInfo.uploadError}
            </ListGroup.Item>
        );
    }
}