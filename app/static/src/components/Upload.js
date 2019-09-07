import React from 'react';
import {Button} from 'react-bootstrap'
import axios from 'axios'

export class Upload extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedFile:{},
            uploadPercentage:0
        }
    }
    onUpload(){
        let formData = new FormData();
        formData.append('file', this.state.selectedFile);
        axios.post(
            'http://localhost:5000/upload/perform_task',
            formData,
            {
                headers: {
                'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: this.onUploadProgressChange
            }
        ).then(function(res){
            console.log(res)
        })
        .catch(function(error){
            console.log(error)

        })
    }
    onFileChange(event){
        const element = event.target;
        if(element.files.length > 0)
        {
            this.setState({selectedFile: element.files[0]});
        }
    }
    onUploadProgressChange(){

    }

    render(){
        return (
            <div>
                <input type="file" name="fileUpload" onChange={this.onFileChange} />
                <Button onClick={this.onUpload}>Upload</Button>
            </div>
            );
  }
}

