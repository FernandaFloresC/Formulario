//React
import * as React from 'react';
import { useState } from 'react';
//Material UI
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import {
  Typography,
  Box,
  TextField,
  Button,
  Select,
  FormControl,
  CardMedia,
  CardContent,
  CardActionArea,
  MenuItem,
  InputLabel,
  Grid
} from '@mui/material';

//Iconos
import VideoChatOutlinedIcon from '@mui/icons-material/VideoChatOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import TodayIcon from '@mui/icons-material/Today';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
// Calendario
//import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//import AdapterDayjs from '@mui/lab/AdapterDayjs';
//import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

import MainCard from 'components/MainCard';
import '../../css/general.css';
import logo from '../../assets/images/logo.png';
import udla from '../../assets/images/UDLA.jpg';

const steps = ['Presencial o Virtual', 'Fechas', 'Horarios', 'Agentes', 'Guardado'];

export default function HorizontalNonLinearStepper() {
  const [seleccion0] = useState();
  const [selectedCita, setSelectedCita] = useState(null);
  const [seleccion, setSeleccion] = useState();
  const [seleccionFin, setSeleccionFin] = useState();
  const [seleccionInicio, setSeleccionInicio] = useState();

  const today = dayjs();
  const customStepIcon = (stepProps) => {
    const { index } = stepProps;
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{index + 1}</div>;
  };
  const shouldDisableDate = (date) => {
    const dayOfWeek = date.day();
    // Deshabilitar los días no laborables (sábado y domingo)
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  const [selectedDateIni, setSelectedDateIni] = useState(null);
  const [selectedDateFin, setSelectedDateFin] = useState(null);
  const [agentesSeleccionados, setAgentes] = useState();
  const [fechaInicioFormateada, setFechaInicioFormateada] = useState();
  const [fechaFinalFormateada, setFechaFinalFormateada] = useState();
  //const [value, setValue] = useState(null);
  // const today = dayjs();
  //const [visible, setVisible] = useState(false);

  // const shouldDisableDate = (date) => {
  //   const dayOfWeek = date.day();

  //   // Deshabilitar los días no laborables (sábado y domingo) y las fechas anteriores al día actual
  //   return dayOfWeek === 0 || dayOfWeek === 6 || date.isBefore(today, 'day');
  // };

  // const isWeekday = (date) => {
  //   const dayOfWeek = date.day();

  //   // Habilitar solo los días laborables (de lunes a viernes)
  //   return dayOfWeek >= 1 && dayOfWeek <= 5;
  // };
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const [canProceed, setCanProceed] = useState(false);
  const [canProceed1, setCanProceed1] = useState(false);
  const [canProceed2, setCanProceed2] = useState(false);
  const [canProceed3, setCanProceed3] = useState(false);

  const Confirmar = async () => {
    console.log('listo');
  };

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    if (
      (activeStep === 0 && !canProceed) ||
      (activeStep === 1 && !canProceed1) ||
      (activeStep === 2 && !canProceed2) ||
      (activeStep === 3 && !canProceed3)
    ) {
      return;
    }

    if (activeStep === 1) {
      const startDate = selectedDateIni;
      const endDate = selectedDateFin;

      if (startDate && endDate) {
        // Validar que la fecha de inicio sea anterior a la fecha de fin
        const isValidRange = dayjs(startDate).isBefore(endDate);

        if (!isValidRange) {
          // La fecha de fin es inferior a la fecha de inicio, muestra un mensaje de error o realiza alguna acción
          return;
        }
      }
    }
    // Formatear las fechas seleccionadas antes de mostrarlas en la consola
    const formattedStartDate = selectedDateIni ? dayjs(selectedDateIni).format('DD/MM/YYYY') : 'Ninguna';
    const formattedEndDate = selectedDateFin ? dayjs(selectedDateFin).format('DD/MM/YYYY') : 'Ninguna';

    setFechaInicioFormateada(formattedStartDate);
    setFechaFinalFormateada(formattedEndDate);

    console.log('Fecha de inicio seleccionada:', formattedStartDate);
    console.log('Fecha de fin seleccionada:', formattedEndDate);

    const newActiveStep = isLastStep() && !allStepsCompleted() ? steps.findIndex((step, i) => !(i in completed)) : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleStep = (step) => () => {
  //   setActiveStep(step);
  // };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Agenda tu Cita Virtual o Presencial
                </Typography>
                <Typography variant="body1">Selección: {selectedCita ? selectedCita : 'Ninguna'}</Typography>
                <CardMedia component="img" height="380" image={udla} alt="Imagen Cita Virtual o Presencial" />
                <Box my={1}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Selecciona una opción</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={seleccion0} label="Selecciona una opción" onChange={(event) => {
                        setSelectedCita(event.target.value);
                        setCanProceed(event.target.value !== ''); }}>
                      {console.log(selectedCita)}
                      <MenuItem value={''}>Selecciona una opción</MenuItem>
                      <MenuItem value={'Presencial'}>
                        <HomeWorkOutlinedIcon sx={{ color: '#FF5200' }} /> Presencial{' '}
                      </MenuItem>
                      <MenuItem value={'Virtual'}>
                        <VideoChatOutlinedIcon sx={{ color: '#FF5200' }} /> Virtual
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </CardContent>
            </CardActionArea>
          </Grid>
        );
      case 1:
        return (
          <Grid item xs={12} sm={12} md={12} lg={12} className="calendar" adapterLocale="es">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography gutterBottom variant="h5" component="div">
                  <TodayIcon sx={{ color: '#FF5200' }} />
                  Agenda tu Cita
                </Typography>
                <Typography variant="body1">
                  Selección: {selectedCita ? selectedCita : 'Ninguna'} - Fecha seleccionada:{' '}
                  {selectedDateIni && selectedDateFin
                    ? selectedDateIni.format('DD/MM/YYYY') + ' - ' + selectedDateFin.format('DD/MM/YYYY')
                    : 'Ninguna'}
                </Typography>
              </Box>
              <CardMedia height="850" width="600" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 2, gap: 3 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
                  <DateCalendar label="Selecciona una fecha" value={selectedDateIni} onChange={(date) => {
                      setSelectedDateIni(date);
                      setCanProceed1(date !== null);
                    }} renderInput={(params) => <TextField {...params} />} minDate={today} shouldDisableDate={shouldDisableDate} />
                  <DateCalendar label="Selecciona una fecha" value={selectedDateFin} onChange={(date) => {   setSelectedDateFin(date);   setCanProceed1(date !== null); }} renderInput={(params) => <TextField {...params} />} minDate={today} shouldDisableDate={shouldDisableDate} />
                </LocalizationProvider>
              </CardMedia>
            </LocalizationProvider>
          </Grid>
        );

      case 2:
        return (
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <AccessTimeIcon sx={{ color: '#FF5200' }} /> Seleccione la franja horaria de las visitas
                </Typography>
                <Box my={1}>
                  <FormControl fullWidth>
                    <InputLabel>Desde:</InputLabel>
                    <Select id="demo-simple-select" value={seleccionInicio} label="inicio" onChange={(e) => {
                        setSeleccionInicio(e.target.value);
                        setCanProceed2(e.target.value !== '');
                      }}  >
                      {console.log(seleccionInicio)}
                      <MenuItem value={''}>Selecciona una opción</MenuItem>
                      <MenuItem value={'0900'}>09 AM</MenuItem>
                      <MenuItem value={'1000'}>10 AM</MenuItem>
                      <MenuItem value={'1100'}>11 AM</MenuItem>
                      <MenuItem value={'1200'}>12 PM</MenuItem>
                      <MenuItem value={'1300'}>13 PM</MenuItem>
                      <MenuItem value={'1400'}>14 PM</MenuItem>
                      <MenuItem value={'1500'}>15 PM</MenuItem>
                      <MenuItem value={'1600'}>16 PM</MenuItem>
                      <MenuItem value={'1700'}>17 PM</MenuItem>
                      <MenuItem value={'1800'}>18 PM</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box my={1}>
                  <FormControl fullWidth>
                    <InputLabel>Hasta:</InputLabel>
                    <Select id="demo-simple-select" value={seleccionFin} label="final" onChange={(e) => {
                        setSeleccionFin(e.target.value);
                        setCanProceed2(e.target.value !== '');
                      }}  >
                      {console.log(seleccionFin)}
                      <MenuItem value={''}>Selecciona una opción</MenuItem>
                      <MenuItem value={'0900'}>09 AM</MenuItem>
                      <MenuItem value={'1000'}>10 AM</MenuItem>
                      <MenuItem value={'1100'}>11 AM</MenuItem>
                      <MenuItem value={'1200'}>12 PM</MenuItem>
                      <MenuItem value={'1300'}>13 PM</MenuItem>
                      <MenuItem value={'1400'}>14 PM</MenuItem>
                      <MenuItem value={'1500'}>15 PM</MenuItem>
                      <MenuItem value={'1600'}>16 PM</MenuItem>
                      <MenuItem value={'1700'}>17 PM</MenuItem>
                      <MenuItem value={'1800'}>18 PM</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </CardContent>
            </CardActionArea>

            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <TimelapseIcon sx={{ color: '#FF5200' }} /> Duración
                </Typography>
                <Box my={1}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Duración de las visitas</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={seleccion} label="Duracion" onChange={(e) => {
                        setSeleccion(e.target.value);
                        setCanProceed2(e.target.value !== '');
                      }} >
                      {console.log(seleccion)}
                      <MenuItem value={''}>Selecciona una opción</MenuItem>
                      <MenuItem value={'15'}>15 min</MenuItem>
                      <MenuItem value={'30'}>30 min</MenuItem>
                      <MenuItem value={'60'}>60 min</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </CardContent>
            </CardActionArea>
          </Grid>
        );

      case 3:
        return (
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <PersonAddIcon sx={{ color: '#FF5200' }} /> Indique la cantidad de agentes disponibles
                </Typography>
                <Box my={2}>
                  <FormControl fullWidth width={600}>
                    <TextField id="agentes" type="number" label="Ingrese el numero de agentes disponibles" fullWidth variant="standard" onChange={(e) => {
                        setCanProceed3(e.target.value !== '');
                        setAgentes(e.target.value);
                      }}
                      margin="dense" />
                  </FormControl>
                </Box>
              </CardContent>
            </CardActionArea>
          </Grid>
        );

      case 4:
        return (
          <Grid item xs={12} sm={12} md={12} lg={10}>
            <MainCard title={'Resumen'}>
              <Box sx={{ width: '500' }}>
                <TextField id="tipo" value={selectedCita} label="Tipo" fullWidth variant="standard" margin="dense" disabled />
                <TextField id="Mes inicio" value={fechaInicioFormateada} label="Mes Inicial" fullWidth variant="standard" margin="dense" disabled
                />
                <TextField id="Mes Final" value={fechaFinalFormateada} label="Mes Final" fullWidth variant="standard" margin="dense" disabled
                />
                <TextField id="Horario inicio" value={seleccionInicio} label="Horario Inicio" fullWidth variant="standard" margin="dense" disabled
                />
                <TextField id="Horario Final" value={seleccionFin} label="Horario Final" fullWidth variant="standard" margin="dense" disabled
                />
                <TextField id="Duracion" value={seleccion} label="Duracion" fullWidth variant="standard" margin="dense" disabled />
                <TextField
                  id="Cantidad de Agentes" value={agentesSeleccionados} label="Cantidad de Agentes" fullWidth variant="standard" margin="dense" disabled
                />
                <Button variant="contained" color="error" margin="dense" onClick={() => Confirmar()}>
                  Confirmar
                </Button>
              </Box>
            </MainCard>
          </Grid>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep} alternativeLabel activeStepIcon={customStepIcon}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="#FF5200">{label}</StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Todos los pasos fueron completados - Tú&apos;haz finalizado</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>Paso {activeStep + 1}</Typography>
            <MainCard sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border:'0', backgroundColor:'#E8E8E8' }}>
              <img src={logo} alt="udla" width={100} />
            </MainCard>
            <Box direction="row" justifyContent="space-between" alignItems="center">
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 2 }}>{renderStepContent(activeStep)}</Box>
              {/* <Box sx={{ flex: '1 1 auto' }} /> */}
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 2 }}>
                <Button sx={{ mr: 1, color: '#ff5200' }} className="siguiente" disabled={activeStep === 0} onClick={handleBack}>
                  <ArrowCircleLeftIcon /> Atrás
                </Button>
                {/* <Box sx={{ flex: '1 1 auto' }} /> */}
                <Button onClick={handleNext} sx={{ mr: 1, color: '#ff5200' }} className="siguiente" disabled={!canProceed}>
                  Siguiente <ArrowCircleRightIcon />
                </Button>

                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography variant="caption" sx={{ display: 'inline-block' }} className="paso">
                      Paso {activeStep + 1} listo
                    </Typography>
                  ) : (
                    <Button sx={{ mr: 1, color: '#ff5200' }} className="siguiente" onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1 ? 'Finalizar' : 'Completar pasos'}
                    </Button>
                  ))}
              </Box>
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
