import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { useState } from 'react';

import Calendario from 'components/Calendario';

export default function Select_cita() {
  const [seleccion, setSeleccion] = useState();
  const [visita, setVisita] = useState();
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); // Estado para la fecha seleccionada
  const [mostrarCalendario2, setMostrarCalendario2] = useState(false);
  const [selectedDate2, setSelectedDate2] = useState(null);

  //const [nombreSeleccionado, setNombreSeleccionado] = useState('');

  // const handleSeleccionChange = (e) => {
  //   setSeleccion(e.target.value);
  //   setNombreSeleccionado(e.target.options[e.target.selectedIndex].text);
  //   setMostrarCalendario(true);
  // };

  return (
    <Box>
     
        <Box sx={{ maxWidth: 345, borderColor: '#FF5200' }} border={1} m={1}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5"  component="div">
              Admisión: <br />
  Agendar entrevista <br />
  30 min
              </Typography>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="Imagen Cita Virtual"
              />
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel bgcolor="#FF5200" id="demo-simple-select-label">
                    Selecciona una Sede
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={seleccion}
                    label="Selecciona una Sede"
                    onChange={(e) => {
                      setSeleccion(e.target.value);
                      setMostrarCalendario(true);
                      setMostrarCalendario2(false)
                      
                      // Mostrar el calendario cuando se seleccione una sede
                    }}
                  >
                    <MenuItem value={0}>Selecciona un Campus</MenuItem>
                    <MenuItem value={'santiago_centro'}>Santiago Centro</MenuItem>
                    <MenuItem value={'la_florida'}>La Florida</MenuItem>
                    <MenuItem value={'maipu'}>Maipú</MenuItem>
                    <MenuItem value={'providencia'}>Providencia</MenuItem>
                   <MenuItem value={'vina_del_mar'}>Viña del Mar</MenuItem>
                  <MenuItem value={'regimen_online'}>Régimen Online</MenuItem>
                   <MenuItem value={'concepcion'}>Concepción</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </CardContent>
          </CardActionArea>
        </Box>
     
      <Box my={5} sx={{ maxWidth: 345, borderColor: '#FF5200' }} border={1} m={1}>
         
           <CardActionArea>
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                 Admisión ?
                 Agendar Visita
                 45 min
               </Typography>
               <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="imagen visita campus"
              />
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Selecciona un Campus</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={visita}
                    label="Selecciona un Campus"
                    onChange={(e) => {
                      setVisita(e.target.value);
                      setMostrarCalendario(false);
                      setMostrarCalendario2(true); // Mostrar el calendario cuando se seleccione una sede
                    }}
                  //onChange={handleChange}
                  >{console.log(visita)}
                    <MenuItem value={0}>Selecciona un Campus</MenuItem>
                    <MenuItem value={'santiago_centro'}>Santiago Centro</MenuItem>
                    <MenuItem value={'la_florida'}>La Florida</MenuItem>
                    <MenuItem value={'maipu'}>Maipú</MenuItem>
                    <MenuItem value={'providencia'}>Providencia</MenuItem>
                    <MenuItem value={'vina_del_mar'}>Viña del Mar</MenuItem>
                    <MenuItem value={'regimen_online'}>Régimen Online</MenuItem>
                    <MenuItem value={'concepcion'}>Concepción</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </CardContent>
          </CardActionArea>
      </Box>

      {mostrarCalendario === true &&   (
            <Box sx={{ minWidth: 620 }}>
              <Calendario selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
              {console.log('primer calendario')}
            </Box>
          )}
           {mostrarCalendario2 === true &&   (
            <Box sx={{ minWidth: 620 }}>
              <Calendario selected={selectedDate2} onChange={(date) => setSelectedDate2(date)} />
              {console.log('segundo calendario')}
            </Box>
          )}
      </Box>
      
  );
}
