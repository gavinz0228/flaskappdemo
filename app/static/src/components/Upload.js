import React from 'react';
import {Form} from 'react-bootstrap'
import FileUploadProgress  from 'react-fileupload-progress';

export class Upload extends React.Component {
    render(){
        return (
            <div>
            <h3>Default style</h3>
            <FileUploadProgress key='ex1' url='http://localhost:5000/upload/perform_task' method='POST'
              onProgress={(e, request, progress) => {console.log('progress', e, request, progress);}}
              onLoad={ (e, request) => {console.log('load', e, request);}}
              onError={ (e, request) => {console.log('error', e, request);}}
              onAbort={ (e, request) => {console.log('abort', e, request);}}
              />
          </div>
            );
  }
}

