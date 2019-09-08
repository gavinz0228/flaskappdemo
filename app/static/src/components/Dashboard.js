import React from 'react';
import { Container, Row, Col, ListGroup, Alert} from 'react-bootstrap'
import {Line, Pie} from 'react-chartjs-2'
import {StatsApi} from '../api/StatsApi'
export class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            uploadStatsByDate:{labels:[], datasets:[{data:[]}] },
            errorStatsByDeviceTypes:{labels:[], datasets:[{data:[]}] }
        }
        this.uploadStatsChart = React.createRef(); 
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount(){
        StatsApi.getUploadStatsByDate()
            .then(res=>{
                this.setState({uploadStatsByDate: res.data.data})
                console.log(this.state.uploadStatsByDate);
            })
            .catch(error=>{console.log(error)});

        StatsApi.getErrorStatsByDeviceTypes()
            .then(res=>{
                this.setState({errorStatsByDeviceTypes: res.data.data})
                console.log(this.state.errorStatsByDeviceTypes);
            })
            .catch(error=>{console.log(error)});
    }
    render(){
        return (
            <div>
                <Container>
                    <Row>
                    <Alert variant="primary">
                            10 files are awaiting to be processed at this moment.
                        </Alert>
                    </Row>
                    <Row>
                        <Line height={100} data = {this.state.uploadStatsByDate} />
                    </Row>
                    <Row>

                    </Row>
                    <Row>
                        
                        <Col md={{span:6}}>
                            <div><h3>Current Unresolved Errors</h3></div>
                            <ListGroup>
                                <ListGroup.Item>Upload Errors: 0</ListGroup.Item>
                                <ListGroup.Item>Processing Errors: 0</ListGroup.Item>
                                <ListGroup.Item>Data Storage Errors: 0</ListGroup.Item>
                                <ListGroup.Item>Application Errors: 0</ListGroup.Item>
                                <ListGroup.Item>Unknown Application Errors: 0</ListGroup.Item>
                            </ListGroup>
  
                        </Col>
                        <Col md={{span:6}}>
                            <div><h3>Error by Device Types</h3></div>
                            <Pie data = {this.state.errorStatsByDeviceTypes} />
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}