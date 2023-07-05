import * as React from 'react';

import Box from '@mui/material/Box';
import '../css/calendario.css'
 import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
 import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
 //import { Typography } from '@mui/material';
 //import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
 import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
//import { TextField } from '@mui/material';
import { useState } from 'react';
import Formulario from './select/formulario';
export default function Calendario() {
 // const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [value, setValue] = useState(null)

  return (
    <Box xs={12} sx={{  minWidth: 350, maxWidth: 645 , borderColor: '#FF5200' }} border={1} m={1} >
     
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar  onChange={(newValue) => {setValue(newValue);}}  type="date"  id="date" inputFormat="dd/MM/yyyy"
        InputLabelProps={{
          shrink: true
        }}/>
    </LocalizationProvider>
  
      {/* <TextField
        id="date"
        type="date"
        xs={12}
        //sx={{ minWidth: 590 }}
        inputFormat="MM/dd/yyyy"
        onChange={(newValue) => {setValue(newValue);}}
        InputLabelProps={{
          shrink: true
        }}
      /> */}

     {value !== null &&   (
            <Box xs={12}>
              <Formulario  />
              {/* <Typography gutterBottom variant="h2"  component="div">
              {value.$d}
              </Typography> */}
            
              {console.log( value.$d)}
            </Box>
          )}


    </Box>
  );
}