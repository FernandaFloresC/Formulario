import Horario from './Horarios';
import React, { useState } from 'react';

import udla from '../../assets/images/logo.png'

import Box from '@mui/material/Box';
import MainCard from 'components/MainCard';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
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
    <Box xs={12} sx={{ minWidth: 350, maxWidth: 645, borderColor: '#FF5200' }} border={1} m={1}>
      {visible === false && (
        <LocalizationProvider dateAdapter={AdapterDayjs} locale="es">
          <DateCalendar
            className='calendario'
            onChange={(newValue) => { setValue(newValue), setVisible(true); }}
            type='date'
            id='date'
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
        <Box xs={12}>
          <Box xs={12}>
            <MainCard sx={{ height: '100%' }}>
            <img src={udla} alt='udla' width={100} />
              {/* <p>{lugar}</p> */}
            
            </MainCard>
            <Horario flujo={value} sede={lugar} />
            {console.log(value.$d)}
          </Box>
        </Box>
      )}
    </Box>
  );
}

