import React, { Component, useState } from "react";
import { Container } from 'react-bootstrap';
import Select from 'react-select';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const API_KEY = '8fd52a280eb64ce110be856324eb591';

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
    const api = 'aapi.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'

    const [weather, setWeather] = useState([])

    const [addCard, setAddCard] = useState([])

    const [slctdCities, setCities] = useState([])

    const [open, setOpenList] = React.useState(false);
    const handleOpenModal = () => setOpenList(true);
    const handleCloseModal = () => setOpenList(false);

    const AddInfoCountry = (selectedOptions) =>{
        console.log("Valor de Select: ", selectedOptions);
        setCities(selectedOptions);
    }

    // fetch(api)
    //     .then(res =>
    //         console.log("Respuesta API:", res.json())
    //     ).catch(error => {
    //         console.error("Problema API:", error)
    //     })

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

    const search = (arr) => arr.map(item => item);
    // console.log(search(city))

    return (
        <>
            <Container>

                <Button onClick={handleOpenModal}>
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
                            //defaultValue={[city[17]]}
                            closeMenuOnSelect={false}
                            name="nameCity"
                            className="basic-multi-select"
                            classNamePrefix="select"
                            isMulti
                            options={city}
                            value={slctdCities}
                            onChange={AddInfoCountry}

                        />
                        {city.map((eachCities) => (
                            <>
                            </>

                        ))}

                    </Box>
                </Modal>
            </Container>
        </>
    )
}
export default ListCountries