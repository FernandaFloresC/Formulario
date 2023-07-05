import * as React from 'react';

import Box from '@mui/material/Box';
import '../css/calendario.css'
 // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
 // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
//  import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TextField } from '@mui/material';
import { useState } from 'react';
export default function Calendario() {

  const [value, setValue] = useState(null)

  return (
    <Box sx={{ maxWidth: 345, borderColor: '#FF5200' }} border={1} m={1} >
      {/* <LocalizationProvider sx={{ maxWidth: 345, borderColor: '#FF5200' }} border={1} m={1} dateAdapter={AdapterDayjs} >
        <DateTimePicker  label="Basic date time picker" className='calendario' id='calendario'/>
      </LocalizationProvider> */}
   {/* <LocalizationProvider sx={{ maxWidth: 345, borderColor: '#FF5200' }} border={1} m={1} dateAdapter={AdapterDayjs} > */}
      <TextField
      //dateAdapter={AdapterDayjs}
  id="date"
  placeholder=""
  type="date"
  //defaultValue="2017-05-24"
  sx={{ width: 345 }}
  value={value}
  onChange={(newValue) => {setValue(newValue);
  }}
  InputLabelProps={{
    shrink: true
  }}
/>
{console.log(value + 'aqui')}
{/* </LocalizationProvider> */}

    </Box>
  );
}
