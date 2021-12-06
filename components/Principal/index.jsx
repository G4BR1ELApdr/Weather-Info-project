import React from "react";
import { Container, Row, Col } from 'react-bootstrap';



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

                    </Col>
                </Row>
                <Row>
                </Row>
            </Container>

        </>
    )
}
export default Principal