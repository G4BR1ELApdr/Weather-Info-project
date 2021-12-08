import React, { useState } from 'react';
import { Container, Row, Col, Nav, } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useUser } from 'reactfire';
import * as fireAuth from 'firebase/auth';
import firebaseApp from '../../pages/firebaseApp';



firebaseApp()
const authLocal = fireAuth.getAuth()

function LogIn() {


    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginButton = () => {
        if (email == '' || password == '') {
            alert("the fields cannot be left empty")
        }
        else {
            fireAuth.signInWithEmailAndPassword(authLocal, email, password)
                .then(data => console.log("Parte de la data:",data))
                .catch(error => { console.log("El problema es...", error) })

        }
    }


    return (
        <>

            <Container fluid>
                <Row className="pt-5">
                    <Col className="w-50 pl-15" >
                        <Row>
                            <div>
                                <div>
                                    <img src="login/WeatherInfo.png" />
                                </div>
                            </div>
                        </Row>
                        <Row className="ml-10">
                            <TextField id="Email" label="Email" className="m-3 w-50" onChange={(ev) => setEmail(ev.target.value)} />
                            <FormControl className="m-3 w-50">
                                <InputLabel htmlFor="Password">Password</InputLabel>
                                <OutlinedInput
                                    onChange={(ev) => setPassword(ev.target.value)}
                                    id="password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                            <button onClick={loginButton} className="m-3 w-50 btn-login">Log in
                                <Nav>
                                    <Nav.Link href="/principal" ></Nav.Link>
                                </Nav>
                            </button>
                        </Row>
                        <Row>
                            <p className="pt-5 pl-15">You don&apos;t have an acount? <b>
                                <Nav>
                                    <Nav.Link href="/sign-up" className="a-signUp" > sign up here</Nav.Link>
                                </Nav>
                            </b>
                            </p>
                        </Row>
                    </Col>
                    <Col className="w-50">
                        <Row className="w-80">
                            <img src="login/LoginPaisaje.png" />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default LogIn