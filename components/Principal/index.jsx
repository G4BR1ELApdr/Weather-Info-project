import React, { useState } from "react";
import { Container, Row, Col, Nav, } from 'react-bootstrap';
import ListCountries from "../listCountries";



function Principal() {

    return (
        <>
            <Container>
                <Row>
                    <Col xs="12" md="6" lg="6">
                        <img src="/principal/logo2.png" className="w-50" />
                    </Col>
                    <Col xs="12" md="3" lg="3">
                        <spam>&nbsp;</spam>
                    </Col>
                    <Col xs="12" md="3" lg="3">

                    </Col>
                    <Col>
                        {/* <p className="txt-welcome">Welcome!</p> */}
                    </Col>

                </Row>
                <Row className="prueba">
                    <Col>
                       <ListCountries/>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Container>
        </>
    )
}
export default Principal