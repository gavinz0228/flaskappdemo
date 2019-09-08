import React from 'react'
import {Button} from 'react-bootstrap'
export class DataTypeListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {dataTypeInfo:props.dataTypeInfo}
        this.addCallBack = this.props.addCallBack
        console.log(this.addCallBack)
        this.onAdd = this.onAdd.bind(this);
    }
    onAdd(){
        this.addCallBack(this.state.dataTypeInfo);
    }
    render(){
        return (
            <tr>
                <td>{this.state.dataTypeInfo.dataTypeId}</td>
                <td>{this.state.dataTypeInfo.dataTypeName}</td>
                <td>{this.state.dataTypeInfo.deviceBrand}</td>
                <td>{this.state.dataTypeInfo.deviceType}</td>
                <td>{this.state.dataTypeInfo.dataType}</td>
                <td><Button onClick={this.onAdd}> Add </Button></td>
            </tr>
            );
    }
}