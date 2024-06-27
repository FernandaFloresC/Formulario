import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import { Grid, Typography, Button } from '@mui/material';
import 'dayjs/locale/es';

dayjs.locale('es');

export default function Agenda() {
  const today = dayjs();
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);

  const shouldDisableDate = (date) => {
    const dayOfWeek = date.day();
    // Deshabilitar los días no laborables (sábado y domingo) y las fechas anteriores al día actual
    return dayOfWeek === 0 || dayOfWeek === 6 || date.isBefore(today, 'day');
  };

  useEffect(() => {
    obtenerHorarios();
  }, []);

  const obtenerHorarios = () => {
    const horarios = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'];
    setData(horarios);
  };

  const guardarHorario = (horario) => {
    setHorarioSeleccionado(horarioSeleccionado === horario ? null : horario);
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="flex-start">
       <Typography gutterBottom variant="h4" component="div" sx={{marginTop:4}}>
                    Ingrese sus datos y lo contactaremos a través de una videoconferencia.
                  </Typography>
      <Grid item xs={12} md={7}>
        <Box border={1} m={1} p={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
            <Typography variant="h6">Fecha</Typography>
            <DateCalendar
              onChange={(newValue) => { setSelectedDate(newValue); }}
              value={selectedDate}
              minDate={today}
              shouldDisableDate={shouldDisableDate}
              shouldDisableAllKeyboardEvents
            />
          </LocalizationProvider>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box border={1} m={1} p={2}>
          <Typography variant="h6">Hora</Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {data.map((horario, index) => (
              <Button
                key={index}
                variant="contained"
                value={horario}
                onClick={() => guardarHorario(horario)}
                sx={{
                  flex: '1 1 100px',
                  bgcolor: horario === horarioSeleccionado ? '#1B5E20' : '#4CB683', // Verde claro si seleccionado, verde oscuro si no
                  color: '#FFFFFF',
                  '&:hover': {
                    bgcolor: horario === horarioSeleccionado ? '#1B5E20' : '#4CB683',
                  },
                }}
              >
                {horario}
              </Button>
            ))}
          </Box>
        </Box>
      </Grid>

      <Box display="flex" justifyContent="center" p={2}>
                <Button variant="contained"  onClick={() => Guardar()}>
                  Agendar
                </Button>
              </Box>
    </Grid>
  );
}
