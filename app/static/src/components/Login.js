import React from 'react';
import {Redirect} from 'react-router-dom'
import {Form, Button, Container, Row, Col, Jumbotron} from 'react-bootstrap'
import {AuthApi} from '../api/AuthApi'
export class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName:"test",
            password:"test",
            loginSuccess: false,
            sessionToken: null
        }
        this.login = this.login.bind(this);
    }
    login(){
        if( !this.state.userName || !this.state.password)
        {
            alert("Please type in both user name and password!");
            return;   
        }
        AuthApi.login(this.state.userName, this.state.password)
            .then(res =>{
                this.setState({loginSuccess:1, loginToken: res.data.data.sessionToken});
            })
            .catch(err =>{
                console.log(err);
                alert(err.response.data.errorMessage);
            })

    }
    render(){
        if(this.state.loginSuccess)
        {
            return <Redirect exact to="/admin/" />
        }
        return (
            <Container>
                <Row>
                    <Col >
                    <h2>Log In</h2>
                    <Jumbotron style={{width: "30em", margin: "0 auto", top:"50%"}}>
                        <Form>
                            <Form.Group controlId="email" style={{textAlign:"left"}}>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" 
                                    placeholder="Enter email" 
                                    value={this.state.userName}
                                    onChange={(e)=>{this.setState({userName: e.target.value})}}
                                />
                            </Form.Group>
                            <Form.Group controlId="password" style={{textAlign:"left"}}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Password" 
                                    value={this.state.password}
                                    onChange={(e)=>{this.setState({password: e.target.value})}}
                                />
                            </Form.Group>
                            <Button variant="primary" type="button" onClick={this.login}>
                                Submit
                            </Button>
                        </Form>
                    </Jumbotron>
                    </Col>
                </Row>
            </Container>
        );
    }
}

