import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default () => {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    var fondoColor = {
        backgrounColor: "#37E553",
    };

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


    return (

        <Container fluid>
            <Row className="pt-5">
                <Col className="w-50 pl-15" >
                    <Row>
                        <div>
                            <div>
                                <img src="login/WeatherInfo.png" />
                            </div>
                            {/* <h4 className="m-3">Welcome back!</h4> */}
                        </div>
                    </Row>
                    <Row className="ml-10">
                        <TextField id="Email" label="Email" className="m-3 w-50" />
                        <FormControl className="m-3 w-50">
                            <InputLabel htmlFor="Password">Password</InputLabel>
                            <OutlinedInput
                                id="password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
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
                        <button className="m-3 w-50 btn-login">Log in</button>
                    </Row>
                    <Row>
                        <p className="pt-5 pl-15">You don't have an acount? &nbsp;<b>
                            <a href="/signUp" className="a-signUp">sign up here</a>
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
    );
};