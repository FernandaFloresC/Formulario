import * as React from 'react';

import Box from '@mui/material/Box';
import '../css/calendario.css'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function Calendario() {
  return (
    <Box sx={{ maxWidth: 345 }} >
      <LocalizationProvider sx={{ maxWidth: 345, borderColor: '#FF5200' }} border={1} m={1} dateAdapter={AdapterDayjs} >
        <DateTimePicker  label="Basic date time picker" className='calendario' id='calendario'/>
      </LocalizationProvider>
    </Box>
  );
}
