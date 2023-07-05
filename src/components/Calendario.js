import * as React from 'react';

import Box from '@mui/material/Box';
import '../css/calendario.css'
 // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
 // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
//  import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TextField } from '@mui/material';
import { useState } from 'react';
import Formulario from './select/formulario';
export default function Calendario() {
 // const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [value, setValue] = useState(null)

  return (
    <Box sx={{ maxWidth: 345, borderColor: '#FF5200' }} border={1} m={1} >
      {/* <LocalizationProvider sx={{ maxWidth: 345, borderColor: '#FF5200' }} border={1} m={1} dateAdapter={AdapterDayjs} >
        <DateTimePicker  label="Basic date time picker" className='calendario' id='calendario'/>
      </LocalizationProvider> */}
  
      <TextField
        id="date"
        placeholder=""
        type="date"
        sx={{ width: 345 }}
        inputFormat="MM/dd/yyyy"
        //value={value}
        //label="LALA"
        onChange={(newValue) => {setValue(newValue);}}
        InputLabelProps={{
          shrink: true
        }}
      />

     {value !== null &&   (
            <Box sx={{ minWidth: 620 }}>
              <Formulario   />
              {console.log('formulario?')}
            </Box>
          )}


    </Box>
  );
}
