import React from 'react';
import {Container, Badge, Row,Col, Form, Table, Button, Jumbotron } from 'react-bootstrap';
import {DataTypeListItem} from './DataTypeListItem'
import {DataApi} from '../api/DataApi'
export class DataManager extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            dataTypeInfo: [],
            deviceSearchText:"",
            selectedDataTypeInfo:[]
        }
        this.onSearchTextChange = this.onSearchTextChange.bind(this);
        this.addTypeCallBack = this.addTypeCallBack.bind(this);
        this.filterSelectedDataTypes = this.filterSelectedDataTypes.bind(this);
    }
    componentDidMount(){
        DataApi.getAllDataTypes()
            .then(res=>{
                this.setState({dataTypeInfo: this.filterSelectedDataTypes(res.data.data)})
            })
    }
    onSearchTextChange(e){
        this.setState({deviceSearchText: e.target.value},()=>{
            DataApi.searchDataTypes(this.state.deviceSearchText)
                .then(res=>{
                    this.setState({dataTypeInfo: this.filterSelectedDataTypes(res.data.data) })
                })
        })
    }
    filterSelectedDataTypes(dataTypes){
        const seletedTypeIdSet = new Set(this.state.selectedDataTypeInfo.map(dt=> dt.dataTypeId))
        return dataTypes.filter(dt=> !seletedTypeIdSet.has(dt.dataTypeId));
    }
    addTypeCallBack(addedTypeInfo){
        console.log(addedTypeInfo);

        const newDataTypeInfoState = this.state.dataTypeInfo.filter(dt => dt.dataTypeId !== addedTypeInfo.dataTypeId);
        this.setState({dataTypeInfo: newDataTypeInfoState}, 
            this.setState({selectedDataTypeInfo:[ ...this.state.selectedDataTypeInfo, addedTypeInfo]})
        );
        
    }
    render(){
        const dataTypeList = this.state.dataTypeInfo.map(d =>{
            return (
                <DataTypeListItem dataTypeInfo ={d} addCallBack = {this.addTypeCallBack} key={d.dataTypeId}/>
            )
        });
        const selectedDataTypeInfo = this.state.selectedDataTypeInfo.map(dt=><Badge variant="primary" key={dt.dataTypeId}>{dt.dataTypeName}</Badge>);
        return (
            <Container>   
                <Row>
                    <Form.Control 
                        size="lg" 
                        type="text" 
                        placeholder="Search devices type, data type, brand name, device name here" 
                        value={this.state.deviceSearchText} 
                        onChange={this.onSearchTextChange}/>
                </Row>
                <Row>
                    
                    <Table striped bordered hover style={{marginTop: 20}}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Device Name</th>
                                <th>Device Brand</th>
                                <th>Device Type</th>
                                <th>Data Type</th>
                                <th>Add</th>
                            </tr>
                        </thead>
                        <tbody>
                        {dataTypeList}
                        </tbody>
                    </Table>
                </Row>

                <Jumbotron>
                    <Form>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={3}>
                            Seleted Data Type
                            </Form.Label>
                            <Col sm={5}>
                                {selectedDataTypeInfo}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={3}>
                            Start Date
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control name="startDate" type="date"/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={3}>
                            Start Date
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control name="endDate" type="date"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Col>
                                <Button> Export Data</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Jumbotron>
            </Container>
          );
  }
}
