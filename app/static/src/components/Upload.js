import React from 'react';
import {Button, ProgressBar, Container, Row, Col, Card, Jumbotron} from 'react-bootstrap'
import  {FileUploadItem} from './FileUploadItem'
import {FileUploadApi} from '../api/FileUploadApi'

export class Upload extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedFile:{},
            uploadPercentage:0,
            uploadDescription: "",
            filesChosen:[]
        }
        this.uploadButton = React.createRef()
        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
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
    onDragOver(event)
    {
        //console.log(event);
        event.preventDefault()
    }
    onDrop(event){
        event.preventDefault();
        let allFiles = []
        if (event.dataTransfer.items) {
            for (var i = 0; i < event.dataTransfer.items.length; i++) {

              if (event.dataTransfer.items[i].kind === 'file') {
                var file = event.dataTransfer.items[i].getAsFile();
                allFiles.push(file);
              }
            }
          }
          this.setState(
            {
                filesChosen: [...this.state.filesChosen, ...allFiles]
            }
        );
    }
    render(){
        const fileInfo = this.state.filesChosen.map((file)=>{
            return (<FileUploadItem fileInfo={file} key={file.name}/>)
        });
        return (
            <Container >
                <Row>

                </Row>
                <Row>
                    <Col md = {{span: 8, offset: 2}}>
                        <Jumbotron 
                            onDrop= {this.onDrop}
                            onDragOver = {this.onDragOver}
                            style = {{minHeight: 100}} >
                        <span><b>Please drag one or more files to this area</b></span>
                        {fileInfo}
                        </Jumbotron>
                        <div>
                            {/* <input type="file" name="fileUpload" onChange={this.onFileChange} /> */}
                            <Button ref={this.uploadButton} onClick={this.onUpload}>Upload</Button>
                            {/*<ProgressBar animated now={this.state.uploadPercentage} label={this.state.uploadDescription}/>*/}
                        </div>
                    </Col>
                </Row>
            </Container>
            );
  }
}

