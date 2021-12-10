import React, { Component, useState } from "react";
import { Container } from 'react-bootstrap';
import Select from 'react-select';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const API_KEY = '8fd52a280eb64ce110be856324eb591c';

const styleModale = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function ListCountries() {
    const api = 'https://api.openweathermap.org/data/2.5/weather'
    let queryParamAPIKey = "&appid=" + API_KEY;

    const [slctdCities, setCities] = useState([]);
    const [infoCity, setInfoCity] = useState([]);

    const [open, setOpenList] = React.useState(false);
    const handleOpenModal = () => setOpenList(true);
    const handleCloseModal = () => setOpenList(false);

    const AddInfoCountry = (selectedOptions) => {
        console.log("Valor de Select: ", selectedOptions);
        setCities(selectedOptions);
    }

    const getAPIData = () => {
        slctdCities.map(cadaCiudad => {
            //?q={city name}&appid={API key}
            let queryParamCityToLookup = "?q=" + cadaCiudad.label
            fetch(api + queryParamCityToLookup + queryParamAPIKey)
                .then(res => {
                    return res.json()
                }
                ).then(data => {
                    console.log("Data de api:", data)
                    let auxObj = {}
                    auxObj['nombre'] =  data.name
                    auxObj['country'] = data.sys.country
                    auxObj['coordLat'] = data.coord.lat
                    auxObj['coordLon'] = data.coord.lon
                    auxObj['temp'] = data.main.temp
                    auxObj['wind'] = data.wind.speed
                    setInfoCity([...infoCity, auxObj])
                    console.log("info ciie:", infoCity)
                })
                .catch(error => {
                    console.error("Problema API:", error)
                })
        })

    }

    const city = [
        { value: "CCS", label: "Caracas" },
        { value: "BSAS", label: "Buenos Aires" },
        { value: "Suc", label: "Sucre" },
        { value: "SC", label: "Santiago de chile" },
        { value: "BGT", label: "Bogotá" },
        { value: "Br", label: "Brasilia" },
        { value: "SJ", label: "San José" },
        { value: "LH", label: "La Habana" },
        { value: "QT", label: "Quito" },
        { value: "SS", label: "San Salvador" },
        { value: "MG", label: "Managua" },
        { value: "LM", label: "Lima" },
        { value: "MV", label: "Montevideo" },
        { value: "SD", label: "Santo Domingo" },
        { value: "SJ", label: "San Juan" },
        { value: "PM", label: "Panamá" },
        { value: "WDC", label: "Washington D. C." },
        { value: "CDM", label: "Ciudad de México" },
        { value: "OW", label: "Ottawa" },
        { value: "MTY", label: "Monterrey" },
    ]

    

    return (
        <>
            <Container>

                <Button onClick={handleOpenModal}>
                    Select country
                    <AddLocationAltIcon />
                </Button>
                <Modal
                    open={open}
                    onClose={handleCloseModal}
                >
                    <Box sx={styleModale}>
                        <Typography id="modal-List" variant="h6" component="h2">
                            Please select a Country
                        </Typography>
                        <Select
                            defaultValue={[city[17]]}
                            closeMenuOnSelect={false}
                            name="nameCity"
                            className="basic-multi-select"
                            classNamePrefix="select"
                            isMulti
                            options={city}
                            value={slctdCities}
                            onChange={AddInfoCountry}

                        />


                    </Box>
                </Modal>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'inhereit',
                        '& > :not(style)': {
                            m: 3,
                            width: 350,
                            height: 250,
                            p: 2
                        },
                        overflow: 'scroll'
                    }}
                >

                    {infoCity.map((eachauxObjs) => (<>
                        <Paper>
                            <p>Name: {eachauxObjs['nombre']}</p>
                            <p>country: {eachauxObjs['country']}</p>
                            <p>Wind: {eachauxObjs['wind']}</p>
                            <p>Temp: {eachauxObjs['temp']}</p>
                            <p>Coord Lon: {eachauxObjs['coordLon']}</p>
                            <p>Coord Lat: {eachauxObjs['coordLat']}</p>

                        </Paper >
                    
                    </>))}

                </Box>
            </Container>
            <button onClick={getAPIData} className="btn-addCountry mt-5">Citty information</button>
        </>
    )
}
export default ListCountries