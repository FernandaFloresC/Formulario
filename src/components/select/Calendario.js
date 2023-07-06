import Horario from './Horarios';

import React, { useState } from 'react';

import Box from '@mui/material/Box';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

//import 'dayjs/locale/es';

dayjs.locale('es');

export default function Calendario() {

  // const formattedDate = dayjs(flujo).format('D MMMM YYYY'); // Formato: día, mes y año


  const [value, setValue] = useState(null);
  const today = dayjs();
  const [visible, setVisible] = useState(false);
  const shouldDisableDate = (date) => {
    const dayOfWeek = date.day();

    // Deshabilitar los días no laborables (sábado y domingo) y las fechas anteriores al día actual
    return dayOfWeek === 0 || dayOfWeek === 6 || date.isBefore(today, 'day');
  };

  return (
    <Box xs={12} sx={{ minWidth: 350, maxWidth: 645, borderColor: '#FF5200' }} border={1} m={1}>
       {visible === false && (
      <LocalizationProvider dateAdapter={AdapterDayjs} >
        <DateCalendar
          className='calendario'
          onChange={(newValue) => { setValue(newValue), setVisible(true);}}
          type="date"
          id="date"
          inputFormat="dd/MM/yyyy"
          InputLabelProps={{
            shrink: true,
          }}
          minDate={today}
          shouldDisableDate={shouldDisableDate}
        />
      </LocalizationProvider>
       )}
      {value !== null && (
        <Box xs={12}>
           {/* <p>Fecha seleccionada: {formattedDate}</p> */}
                <Horario flujo={value}/>
              
               {console.log( value.$d)}
            
        </Box>
      )}
    </Box>
  );
}
