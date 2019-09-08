import React from 'react';
import {Button, Container, Row, Col, Jumbotron, Dropdown, ButtonGroup} from 'react-bootstrap'
import  {FileUploadItem} from './FileUploadItem'
import {FileUploadApi} from '../api/FileUploadApi'
import {DataApi} from '../api/DataApi'
export class FileUploadPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uploadPercentage:0,
            uploadDescription: "",
            filesChosen:[],
            allDataTypeInfo:[],
            seletedDataTypeInfo:null
        }
        this.uploadButton = React.createRef()
        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.onUpload = this.onUpload.bind(this);
        this.onUploadProgressChange = this.onUploadProgressChange.bind(this);
        this.onDataTypeSelected = this.onDataTypeSelected.bind(this);
    }
    componentDidMount(){
        DataApi.getAllDataTypes().then(res=>{
            this.setState({allDataTypeInfo: res.data.data})
        })
    }
    onUpload(){
        if (this.state.filesChosen.length == 0)
        {
            alert("Please select a file before uploading");
            return;
        }
        const componentThis = this;
        this.uploadButton.current.disabled = true;
        this.setState({uploadPercentage:0});

        this.state.filesChosen.forEach(f =>{

            FileUploadApi.uploadFile(f, this.onUploadProgressChange)
            .then(function(res){
                console.log(res)
            })
            .catch(function(error){
                console.log(error.response)
            })

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
        /*
        let percentage = parseInt(progressEvent.loaded / this.state.selectedFile.size * 100)
        this.setState({uploadPercentage: percentage});
        this.setState({uploadDescription: percentage + "%"})
        console.log(progressEvent.loaded , this.state.selectedFile.size, this.state.uploadPercentage);
        */
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
    onDataTypeSelected(e){
        const targetKey = e.target.getAttribute("dtid");
        if(targetKey)
        {
            const seletedTypeInfo = this.state.allDataTypeInfo.filter(dt => dt.dataTypeId == targetKey);
            this.setState({seletedDataTypeInfo: seletedTypeInfo[0]});
        }

    }
    render(){
        const fileInfo = this.state.filesChosen.map((file)=>{
            return (<FileUploadItem fileInfo={file} key={file.name}/>)
        });
        
        const selectedTypeText = this.state.seletedDataTypeInfo==null? "Please Select a Data Type": this.state.seletedDataTypeInfo.dataTypeName;
        console.log(this.state.seletedDataTypeInfo);
        const dataTypeSelections = this.state.allDataTypeInfo.map(dt =><Dropdown.Item key={dt.dataTypeId} dtid={dt.dataTypeId}>{dt.dataTypeName}</Dropdown.Item> );
        return (
            <Container >
                <Row>
                    <Col >
                        <Jumbotron 
                            onDrop= {this.onDrop}
                            onDragOver = {this.onDragOver}
                            style = {{minHeight: 200}} >
                        <span><b>Please drag one or more files to this area</b></span>
                        {fileInfo}
                        </Jumbotron>
                        
                        {this.state.filesChosen.length} File(s) selected
                        <br/>

                        {/* <input type="file" name="fileUpload" onChange={this.onFileChange} /> */}
                        {/*<ProgressBar animated now={this.state.uploadPercentage} label={this.state.uploadDescription}/>*/}

                        <Dropdown 
                            as={ButtonGroup}
                            onClick={this.onDataTypeSelected}
                            >
                            <Button variant="success">{selectedTypeText}</Button>

                            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                            <Dropdown.Menu>
                                {dataTypeSelections}
                            </Dropdown.Menu>
                        </Dropdown>
                        <br/>
                        <br/>
                        <Button ref={this.uploadButton} onClick={this.onUpload}>Upload</Button>
                    </Col>
                </Row>
            </Container>
            );
  }
}

