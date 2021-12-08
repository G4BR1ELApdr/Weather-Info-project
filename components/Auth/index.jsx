import React, { useState } from 'react';
import * as fireAuth from 'firebase/auth';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import firebaseApp from '../../pages/firebaseApp';
import { Nav } from 'react-bootstrap';





firebaseApp()
const authLocal = fireAuth.getAuth()

function Auth() {


    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

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
    const [showAlert, setShowAlert] = useState(false)



    const submit = async () => {
        if (email == '' || password == '') {
            alert("the fields cannot be left empty")
        } else if (password.length <= 5) {
            setShowAlert(true)
        }
        else {
            console.log(await fireAuth.createUserWithEmailAndPassword(authLocal, email, password))
        }

    }


    return (
        <>
            <div>
                <TextField id="Email" label="Email" className="m-3 w-50" onChange={(ev) => setEmail(ev.target.value)} />
                <FormControl className="m-3 w-50" >
                    <InputLabel>Password</InputLabel>
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
                

                <button onClick={submit} className="m-3 w-50 btn-signup">
                    Create account
                    {password.length <= 5 ?
                        <>
                        </>
                        :
                        <>
                            <Nav.Link href="/principal">
                            </Nav.Link>
                        </>}
                </button>
                {showAlert ?
                    <>
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert variant="outlined" severity="error">
                                the password is cannot be less than 6 digits
                            </Alert>
                        </Stack></>
                    :
                    <></>
                }

            </div>



        </>
    )
}
export default Auth