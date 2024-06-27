import * as React from 'react';
import { useState, useEffect } from 'react';
import { Typography, Box, TextField, Button, Select, FormControl, CardMedia, CardContent, MenuItem, InputLabel, Grid, Card, InputAdornment, Stepper, Step, StepLabel } from '@mui/material';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import CommentIcon from '@mui/icons-material/Comment';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
// import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
// import CancelIcon from '@mui/icons-material/Cancel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import MainCard from 'components/MainCard';
import '../css/general.css';
import verde from '../assets/images/verde.png';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const steps = ['Solicitud', 'Agenda', 'Hora agendada'];

export default function Pasos() {
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
  const [seleccionFin, setSeleccionFin] = useState('');
  const [activeStep, setActiveStep] = React.useState(0);

  const [canProceed, setCanProceed] = useState(false);
  const [canProceed1, setCanProceed1] = useState(false);
  const [canProceed2, setCanProceed2] = useState(false); // Define canProceed1 state


  const handleNext = () => {
    if (activeStep === 0 && !canProceed) {
      return; // No avanza si no se puede proceder en el paso 0
    }

    if (activeStep === 1 && !canProceed1) {
      return; // No avanza al paso 2 si canProceed1 es falso
    }

    if (activeStep === 2 && !canProceed2) {
      return; // No avanza al paso 3 si canProceed2 es falso
    }

    const newActiveStep = activeStep + 1;
    setActiveStep(newActiveStep);
  };

  
  const handleIngresarSolicitud = () => {
    setCanProceed(true);
    handleNext();
  };
  const handleAgendar = () => {
    setCanProceed1(true);
    handleNext();
  };

  const handleInputChange = (e) => {
    // Validaciones para el paso 1
    const nombre = e.target.value;
    const email = e.target.value;

    const puedeProceder = nombre !== '' && email !== '';
    setCanProceed2(puedeProceder);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container justifyContent="center" spacing={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid item xs={12} md={8} lg={6}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Ingresa tus datos
                    </Typography>
                    <Grid container spacing={2} direction="column">
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="nombre" label="Nombre" variant="outlined" margin="dense" fullWidth InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <PersonIcon />
                            </InputAdornment>
                          ),
                        }} />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="rut" label="Rut" variant="outlined" margin="dense" fullWidth InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <PersonPinIcon />
                            </InputAdornment>
                          ),
                        }} />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          id="email"
                          label="Email"
                          variant="outlined"
                          margin="dense"
                          fullWidth
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <EmailIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="confirm_email" label="Confirmación email" variant="outlined" margin="dense" fullWidth InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <EmailIcon />
                            </InputAdornment>
                          ),
                        }} />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField id="telefono" label="Telefono" variant="outlined" margin="dense" fullWidth InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <PhoneIcon />
                            </InputAdornment>
                          ),
                        }} />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <FormControl fullWidth>
                          <InputLabel>Trámite requerido</InputLabel>
                          <Select
                            id="demo-simple-select" InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <FindInPageIcon />
                                </InputAdornment>
                              ),
                            }}
                            value={seleccionFin}
                            label="final"
                            onChange={(e) => {
                              setSeleccionFin(e.target.value);
                              // setCanProceed2(e.target.value !== '');
                            }}
                          >
                            <MenuItem value="">Selecciona una opción</MenuItem>
                            <MenuItem value="posesion">Posesión Efectiva</MenuItem>
                            <MenuItem value="matrimonio">Matrimonio</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField
                          id="observacion"
                          label="Observación"
                          margin="dense"
                          multiline
                          onChange={handleInputChange}
                          // rows={5}
                          fullWidth
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <CommentIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <Box display="flex" justifyContent="center" p={2}>
                    <Button variant="contained" onClick={handleIngresarSolicitud}>
                      Ingresar Solicitud
                    </Button>
                  </Box>
                </Card>
              </Grid>
            </LocalizationProvider>
          </Grid>
        );
      case 1:
        return (
          <Grid item xs={12} sm={12} md={12} lg={12} className="calendar" adapterLocale="es">
            <Grid container spacing={2} justifyContent="center" alignItems="flex-start">
              <Typography gutterBottom variant="h4" component="div" sx={{ marginTop: 4 }}>
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
                <Button variant="contained" onClick={() => handleAgendar()}>
                  Agendar
                </Button>
              </Box>
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <MainCard>
            <Typography gutterBottom variant="h5" component="div"  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'underline',  marginBottom: 2 }}>
            La cita de atención fue agendada para el: 10/07/2024 a las 10:30 hrs.
            </Typography>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '380px', marginTop:100  // Ajusta esta altura según sea necesario
              }}>
                <CardMedia component="img" height="380" image={verde} alt="Imagen Cita Virtual" style={{
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  objectFit: 'cover', // Opciones: 'contain', 'cover', 'fill', 'none', 'scale-down'
                  width: '50%', // Ajusta la anchura al 100% del contenedor
                  height: 'auto' // Ajusta la altura automáticamente
                }} /> </div>
             
            </Grid>
          </MainCard>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
     
      <Stepper activeStep={activeStep} sx={{ my: 4 }}>
        {steps.map((label, index) => (
          <Step key={label} completed={activeStep > index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {renderStepContent(activeStep)}
    </Box>
  );
}
