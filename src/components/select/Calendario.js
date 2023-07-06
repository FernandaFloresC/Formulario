import React, { useState } from 'react';

//import Formulario from './formulario';
import Horario from './Horarios';

import Box from '@mui/material/Box';
import MainCard from 'components/MainCard';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es'); // Establecer el idioma en español

export default function Calendario(sede) {
  const [value, setValue] = useState(null);
  const [visible, setVisible] = useState(false);
  const today = dayjs();
const lugar = sede.sede

  return (

    <Box xs={12} sx={{ minWidth: 350, maxWidth: 645, borderColor: '#FF5200' }} border={1} m={1}>
      {visible === false && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            className='calendario'
            onChange={(newValue) => { setValue(newValue), setVisible(true); }}
            type="date"
            id="date"
            inputFormat="dd/MM/yyyy"
            InputLabelProps={{
              shrink: true,
            }}
            minDate={today}
          />
        </LocalizationProvider>
      )}

      {value !== null && (
        <Box xs={12}>
          <Box xs={12}>
          <MainCard title='UDLA'  sx={{ height: '100%' }}>
               <p>{lugar}</p>
          </MainCard>

            <Horario flujo={value} sede={lugar} />
            {console.log(value.$d)}
          </Box>
        </Box>
      )}
    </Box>
  );
}
