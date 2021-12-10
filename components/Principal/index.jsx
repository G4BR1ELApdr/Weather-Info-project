import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ListCountries from "../listCountries";



function Principal() {

    return (
        <>
            <Container>
                <Row>
                    <Col xs="12" md="6" lg="6">
                        <img src="/principal/logo2.png" className="w-50" />
                    </Col>
                </Row>
                <Row className="bg-infoCitys mt-5">
                    <Col>
                        <ListCountries />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Principal