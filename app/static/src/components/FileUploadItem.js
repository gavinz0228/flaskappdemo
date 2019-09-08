import React from 'react';
export class FileUploadItem extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            fileInfo: null,
            uploadPercentage: 0
        }
    }
    componentDidMount(){
        this.setState(
            {
                fileInfo: this.props.fileInfo,
                uploadPercentage: this.props.uploadPercentage
            }
        );
    }
    render(){
        if(!this.state.fileInfo)
            return (<div></div>)
        return (
            <div style={{backgroundColor:"white", marginTop: 5}}>
                {this.state.fileInfo.name}
            </div>
        );
    }
}