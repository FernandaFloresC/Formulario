import Horario from './Horarios';
import React, { useState } from 'react';

// import '../../css/general.css'
import udla from '../../assets/images/logo.png'

import Box from '@mui/material/Box';
import MainCard from 'components/MainCard';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import { Grid } from '@mui/material';
 import 'dayjs/locale/es';

 dayjs.locale('es');

export default function Calendario(sede) {
  const [value, setValue] = useState(null);
  const today = dayjs();
  const [visible, setVisible] = useState(false);

  const shouldDisableDate = (date) => {
    
    const dayOfWeek = date.day();

    // Deshabilitar los días no laborables (sábado y domingo) y las fechas anteriores al día actual
    return dayOfWeek === 0 || dayOfWeek === 6 || date.isBefore(today, 'day');
  };

  const isWeekday = (date) => {
    const dayOfWeek = date.day();

    // Habilitar solo los días laborables (de lunes a viernes)
    return dayOfWeek >= 1 && dayOfWeek <= 5;
    
  };

  const lugar = sede.sede;
 

  return (
    <Grid >
    <Box sx={{borderColor: '#FF5200'}} border={1} m={1}>
    <MainCard>
            <img src={udla} alt='udla' width={100} />
            </MainCard>
      {visible === false && (
        
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
          <DateCalendar
            className='calendario rounded-warning'
            onChange={(newValue) => { setValue(newValue), setVisible(true); }}
            type='date'
            id='date'
            locale='es'
            inputFormat='dd/MM/yyyy'
            InputLabelProps={{
              shrink: true,
            }}
            minDate={today}
            shouldDisableDate={shouldDisableDate}
            shouldDisableAllKeyboardEvents
            shouldDisableDateSelection={isWeekday}
          />
        </LocalizationProvider>
      )}
      {value !== null && (
        <Grid sx={{ minWidth: 630 }}>
          {/* <Box > */}
    
            <Horario flujo={value} sede={lugar} />
            {/* {console.log(value.$d)} */}
          {/* </Box> */}
       
       </Grid>
      )}
    </Box>
    </Grid>
  );
}

