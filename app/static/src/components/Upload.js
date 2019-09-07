import React from 'react';
import {Button, ProgressBar, Container, Row, Col, Jumbotron} from 'react-bootstrap'
import axios from 'axios'
import {FileUploadApi} from '../api/FileUploadApi'
export class Upload extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedFile:{},
            uploadPercentage:0,
            uploadDescription: ""
        }
        this.uploadButton = React.createRef()
        
        this.onFileChange = this.onFileChange.bind(this);
        this.onUpload = this.onUpload.bind(this);
        this.onUploadProgressChange = this.onUploadProgressChange.bind(this);
    }

    onUpload(){
        if (this.state.selectedFile === {})
        {
            alert("Please select a file before uploading");
            return;
        }
        const componentThis = this;
        this.uploadButton.current.disabled = true;
        this.setState({uploadPercentage:0});

        FileUploadApi.uploadFile(this.state.selectedFile, this.onUploadProgressChange)
        .then(function(res){
            componentThis.uploadButton.current.disabled = false;
            console.log(res)
        })
        .catch(function(error){
            componentThis.uploadButton.current.disabled = false;
            console.log(error.response)
        })
    }

    onFileChange(event){
        const element = event.target;
        if(element.files.length > 0)
        {
            this.setState({selectedFile: element.files[0]});
        }
    }
    onUploadProgressChange(progressEvent){
        let percentage = parseInt(progressEvent.loaded / this.state.selectedFile.size * 100)
        this.setState({uploadPercentage: percentage});
        this.setState({uploadDescription: percentage + "%"})
        console.log(progressEvent.loaded , this.state.selectedFile.size, this.state.uploadPercentage);
    }

    render(){
        return (
            <Container>
                <Row>
                    File Upload
                </Row>
                <Row>
                    <Col md = {{span: 6, offset: 3}}>
                        <Jumbotron>
                            <input type="file" name="fileUpload" onChange={this.onFileChange} />
                            <Button ref={this.uploadButton} onClick={this.onUpload}>Upload</Button>
                            <ProgressBar animated now={this.state.uploadPercentage} label={this.state.uploadDescription}/>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
            );
  }
}

