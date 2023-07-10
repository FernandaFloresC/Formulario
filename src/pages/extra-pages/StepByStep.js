import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MainCard from 'components/MainCard';

import '../../css/calendario.css';
//import Select_cita from 'components/select/select_cita';
//import Calendario from 'components/select/Calendario';
//import Horario from 'components/select/Horarios';

import { useState } from 'react';
import Grid from '@mui/material/Grid';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import VideoChatOutlinedIcon from '@mui/icons-material/VideoChatOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import logo from '../../assets/images/logo.png';
import udla from '../../assets/images/UDLA.jpg';

const steps = ['Presencial o Virtual', 'Fechas', 'Horarios', 'Agentes', 'Guardado'];

export default function HorizontalNonLinearStepper() {
  const [seleccion] = useState();
  const [selectedCita, setSelectedCita] = useState(null);

  //const [value, setValue] = useState(null);
  const today = dayjs();
  //const [visible, setVisible] = useState(false);

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
  const [selectedDate, setSelectedDate] = useState(null);

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const [canProceed, setCanProceed] = useState(false);
  const [canProceed1, setCanProceed1] = useState(false);
  const [canProceed2, setCanProceed2] = useState(false);
  const [canProceed3, setCanProceed3] = useState(false);

  
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
  
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };
  

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

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
        // return <div>Sede o Cita Content</div>;
        return (
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Agenda tu Cita Virtual o Presencial
                </Typography>
                <Typography variant="body1">Selección: {selectedCita ? selectedCita : 'Ninguna'}</Typography>
                <CardMedia component="img" height="240" width="300" image={udla} alt="Imagen Cita Virtual o Presencial" />
                <Box my={1}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Selecciona una opción</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={seleccion}
                      label="Selecciona una Sede"
                      onChange={(event) => {
                        setSelectedCita(event.target.value);
                        setCanProceed(event.target.value !== '');
                      }}
                    >
                      {console.log(selectedCita)}
                      <MenuItem value={''}>Selecciona una opción</MenuItem>
                      <MenuItem value={'Presencial'}>
                        <HomeWorkOutlinedIcon sx={{ color: '#FF5200' }} />   Presencial{' '}
                      </MenuItem>
                      <MenuItem value={'Virtual'}>
                        <VideoChatOutlinedIcon sx={{ color: '#FF5200' }} />   Virtual
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
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
              <Typography gutterBottom variant="h5" component="div">
              Agenda tu Cita Virtual o Presencial
              </Typography>
              <Typography variant="body1">
                Selección: {selectedCita ? selectedCita : 'Ninguna'} - Fecha seleccionada:{' '}
                {selectedDate ? selectedDate.format('DD/MM/YYYY') : 'Ninguna'}
              </Typography>
              <DateCalendar
                className="calendario rounded-warning"
                onChange={(date) => {
                  setSelectedDate(date);
                  setCanProceed1(date !== null);
                }}
                type="date"
                id="date"
                locale="es"
                inputFormat="dd/MM/yyyy"
                InputLabelProps={{ shrink: true }}
                minDate={today}
                shouldDisableDate={shouldDisableDate}
                shouldDisableAllKeyboardEvents
                shouldDisableDateSelection={isWeekday}
              />
            </LocalizationProvider>
          </Grid>
        );

      case 2:
        return  <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Selecciona una Sede</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={seleccion}
          label="Selecciona una Sede"
          onChange={(event) => {
            setSelectedCita(event.target.value);
            setCanProceed2(event.target.value !== '');
          }}
        >
          {console.log(selectedCita)}
          <MenuItem value={''}>Selecciona una opción</MenuItem>
          <MenuItem value={'Sede'}>
            <HomeWorkOutlinedIcon sx={{ color: '#FF5200' }} /> Sede{' '}
          </MenuItem>
          <MenuItem value={'Cita'}>
            <VideoChatOutlinedIcon sx={{ color: '#FF5200' }} /> Cita
          </MenuItem>
        </Select>
      </FormControl>

      case 3:
        return  <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Selecciona una Sede</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={seleccion}
          label="Selecciona una Sede"
          onChange={(event) => {
            setSelectedCita(event.target.value);
            setCanProceed3(event.target.value !== '');
          }}
        >
          {console.log(selectedCita)}
          <MenuItem value={''}>Selecciona una opción</MenuItem>
          <MenuItem value={'Sede'}>
            <HomeWorkOutlinedIcon sx={{ color: '#FF5200' }} /> Sede{' '}
          </MenuItem>
          <MenuItem value={'Cita'}>
            <VideoChatOutlinedIcon sx={{ color: '#FF5200' }} /> Cita
          </MenuItem>
        </Select>
      </FormControl>
      case 4:
        return <div>Guardado Content</div>;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>Paso {activeStep + 1}</Typography>
            <MainCard>
              <img src={logo} alt="udla" width={100} />
            </MainCard>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              {renderStepContent(activeStep)}
              <Box sx={{ flex: '1 1 auto' }} />
              <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                Atrás
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }} disabled={!canProceed}>
                Siguiente
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>{completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}</Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
