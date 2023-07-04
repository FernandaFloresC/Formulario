import * as React from 'react';

import Box from '@mui/material/Box';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function Calendario() {


  return (
    <Box>
        <Box  sx={{ maxWidth: 345 , borderColor: '#FF5200'}} border={1} m={1}>
         
          
       
            <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker label="Basic date time picker" />
            </LocalizationProvider>
          </Box>
    </Box>
  );
}

