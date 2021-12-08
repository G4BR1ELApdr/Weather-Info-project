import React from 'react';
import { Container, Row, Col, Nav, } from 'react-bootstrap';
import Auth from '../Auth';



function SignUp() {

    return (
        <>
            <Container fluid>
                <Row className="pt-5">
                    <Col className="w-50 pl-15" >
                        <Row>
                            <div>
                                <div className="pl-3">
                                    <img src="signUp/logo3.png" />
                                </div>
                                {/* <h4 className="m-3">Welcome back!</h4> */}
                            </div>
                        </Row>
                        <Row className="ml-10">
                            <Auth />
                        </Row>
                        <Row>
                            <p className="pt-5 pl-15">You have an acount? &nbsp;<b>
                                <Nav>
                                    <Nav.Link href="/log-in" >Log in here</Nav.Link>
                                </Nav>
                            </b>
                            </p>
                        </Row>
                    </Col>
                    <Col className="w-50">
                        <Row className="w-80">
                            <img src="signUp/signupPaisaje.png" className="img-signUp" />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default SignUp