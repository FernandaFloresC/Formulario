// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { Typography, Box, TextField, Button, Select, FormControl, CardContent, MenuItem, InputLabel, Grid, Card, InputAdornment, Stepper, Step, StepLabel } from '@mui/material';
// import FindInPageIcon from '@mui/icons-material/FindInPage';
// import CommentIcon from '@mui/icons-material/Comment';
// import PersonPinIcon from '@mui/icons-material/PersonPin';
// import PersonIcon from '@mui/icons-material/Person';
// import PhoneIcon from '@mui/icons-material/Phone';
// import EmailIcon from '@mui/icons-material/Email';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import dayjs from 'dayjs';
// import 'dayjs/locale/es';
// import MainCard from 'components/MainCard';
// import '../css/general.css';
// import verde from '../assets/images/verde.png';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// import axios from 'axios';
// import Check from '@mui/icons-material/Check';
// import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
// import PropTypes from 'prop-types';
// import { styled } from '@mui/material/styles';

// const QontoConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 25,
//     left: 'calc(-50% + 50px)',
//     right: 'calc(50% + 50px)',
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
//     borderTopWidth: 3,
//     borderRadius: 1,
//   },
// }));

// const QontoStepIconRoot = styled('div')(({ theme }) => ({
//   color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
//   display: 'flex',
//   height: 50,
//   alignItems: 'center',

//   '& .QontoStepIcon-completedIcon': {
//     // color: '#784af4',
//     zIndex: 1,
//     fontSize: 42,
//     backgroundColor: 'green',
//     width: 60,
//     height: 60,
//     borderRadius: '50%',
//   },
//   '& .QontoStepIcon-circle': {
//     width: 60,
//     height: 60,
//     borderRadius: '50%',
//     backgroundColor: 'orange',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: '1.2rem',
//     fontWeight: 'bold',
//   },
// }));

// function QontoStepIcon(props) {
//   const { completed, className } = props;

//   const icons = {
//     0: 0,
//     1: 1

//   };

//   return (
//     <QontoStepIconRoot className={className}>
//       {completed ? (
//         <Check className="QontoStepIcon-completedIcon" />
//       ) : (
//         <div className="QontoStepIcon-circle">{icons[props.icon]}</div>
//       )}
//     </QontoStepIconRoot>
//   );
// }

// QontoStepIcon.propTypes = {
//   // active: PropTypes.bool,
//   className: PropTypes.string,
//   completed: PropTypes.bool,
//   icon: PropTypes.node,
// };


// const steps = ['Solicitud', 'Agenda'];
// // 'Hora agendada'
// import { setUrl, setSesiones } from 'components/Common';


// const url = setUrl()
// // const direccion = setDireccion();
// console.log(url);
// const sesiones = setSesiones();
// console.log(sesiones)
// export default function Pasos() {

//   const [disabledFinalizar, setDisabledFinalizar] = useState(true);
//   const [errors, setErrors] = useState({});
//   const today = dayjs();
//   const [data, setData] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);
//   const shouldDisableDate = (date) => {
//     const dayOfWeek = date.day();
//     // Deshabilitar los días no laborables (sábado y domingo) y las fechas anteriores al día actual
//     return dayOfWeek === 0 || dayOfWeek === 6 || date.isBefore(today, 'day');
//   };
//   // const formattedStartDate = selectedDate ? dayjs(selectedDate).format('DD/MM/YYYY') : 'Ninguna';
//   // setFechaInicioFormateada(formattedStartDate);
//   // console.log('Fecha de inicio seleccionada:', formattedStartDate);
//   useEffect(() => {
//     obtenerHorarios();
//   }, []);

//   useEffect(() => {
//     if (selectedDate && horarioSeleccionado) {
//       setDisabledFinalizar(false);
//     } else {
//       setDisabledFinalizar(true);
//     }
//     console.log(selectedDate)
//     // console.log(selectedDate.$y + '-' + (parseInt(selectedDate.$M) + 1) + '-' + selectedDate.$D)
//     // console.log(horarioSeleccionado)
//   }, [selectedDate, horarioSeleccionado]);


//   async function obtenerHorarios() {
//     const horarios = ['09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'];
//     const dia = selectedDate.$D.toString().padStart(2, '0');
//     const mes = (selectedDate.$M + 1).toString().padStart(2, '0');
//     const anio = selectedDate.$y;

//     const result = await axios.post(
//       "https://app.soluziona.cl/API_v1_prod/Aporta/API_Aporta_Registro_Civil_Videollamada/api/Ventas/Call/HorarioDisponible",
//       { dato: anio + '-' + mes + '-' + dia, dato_1: formData.Tramite }
//       // ,{ headers: { Authorization: `Bearer ${valorToken}` } }
//     );

//     if (result.status === 200) {

//       // Obtener los horarios de la respuesta
//       const horariosOcupados = result.data.map(item => item.hora);

//       // Filtrar la lista de horarios originales para eliminar los ocupados
//       const horariosDisponibles = horarios.filter(horario => !horariosOcupados.includes(horario));

//       // Imprimir los horarios disponibles
//       setData(horariosDisponibles)
//     }
//   }



//   useEffect(() => {
//     if (selectedDate != null) {
//       obtenerHorarios()
//     }
//   }, [selectedDate]);

//   const guardarHorario = (horario) => {
//     setHorarioSeleccionado(horarioSeleccionado === horario ? null : horario);
//     // console.log(horario)

//     // const result = await axios.post('https://app.soluziona.cl/API_v1_prod/Aporta/API_Aporta_Registro_Civil_Videollamada/api/Ventas/Call/HorarioDisponible',
//     //   { dato: '', dato_1: '' },
//     //   { headers: { "Authorization": `Bearer ${sesiones.stoken}` } })

//     // if (result.status === 200) {
//     //   console.log(horarios)
//     //   setData();

//     // }
//   };

//   const [formData, setFormData] = useState({
//     Idllamada: '',
//     // Fechasolicitud: obtenerFecha(),
//     // Horasolicitud: obtenerHora(),
//     Nombre: '',
//     Rut: '',
//     Email: '',
//     Confirm_email: '',
//     Codigo: '0',
//     Telefono: '',
//     Tramite: '0',
//     Obs: '',
//     hora_tomada: '',
//     dia: ''

//     // selectedDate: selectedDate,
//     // horario: horario

//   });

//   const formatAndValidateRut = (rut) => {
//     // Eliminar caracteres no válidos y limitar la longitud a 9 caracteres
//     const cleanedRut = rut.replace(/[^\dkK]/g, '').slice(0, 9);

//     // Verificar si hay suficientes caracteres para agregar el guión
//     let formattedRut = cleanedRut;
//     if (cleanedRut.length > 1) {
//       formattedRut = cleanedRut.slice(0, cleanedRut.length - 1) + '-' + cleanedRut.slice(-1);
//     }

//     // Verificar que el formato solo contenga números y la letra K (mayúscula o minúscula)
//     if (!/^[0-9]+-[0-9kK]{1}$/.test(formattedRut)) {
//       return { formattedRut, validationResult: "RUT inválido, el formato es 12345678-9" };
//     }

//     const [rutNumber, dv] = formattedRut.split("-");
//     let total = 0;
//     let factor = 2;
//     for (let i = rutNumber.length - 1; i >= 0; i--) {
//       total += factor * parseInt(rutNumber[i], 10);
//       factor = factor === 7 ? 2 : factor + 1;
//     }

//     const dvCalc = 11 - (total % 11);
//     const dvFinal = dvCalc === 11 ? "0" : dvCalc === 10 ? "k" : dvCalc.toString();
//     const validationResult = dvFinal.toLowerCase() === dv.toLowerCase() ? "" : "RUT inválido";

//     return { formattedRut, validationResult };
//   };


//   const handleChange = (e) => {
//     const { value, name } = e.target;
//     // console.log(name, value)
//     // console.log(e)
//     if ((name === "Tramite") && value === '0') {
//       alert("Debe seleccionar una Opción")
//       return
//     }

//     if (name === "Rut") {
//       const { formattedRut, validationResult } = formatAndValidateRut(value);
//       setFormData({
//         ...formData,
//         [name]: formattedRut
//       });
//       setErrors({
//         ...errors,
//         [name]: validationResult
//       });
//     } else if (name === "Nombre") {
//       const textValue = value.replace(/[^a-zA-Z\s]/g, '');
//       setFormData({
//         ...formData,
//         [name]: textValue
//       });
//       setErrors({
//         ...errors,
//         [name]: textValue.length > 0 ? "" : `${name} solo puede contener letras`
//       });
//     } else if (name === "Email") {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//       setErrors({
//         ...errors,
//         [name]: emailRegex.test(value) ? "" : "Email inválido, el formato es x@x.x"
//       });
//     }
//     else if (name === "Confirm_email") {
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//       setErrors({
//         ...errors,
//         [name]: formData.Email === value ? "" : "Email de Confirmacion no coincide"
//       });
//       // console.log(Confirm_email)
//     } else if (name === "Telefono") {
//       // Remueve cualquier caracter que no sea un número
//       const cleanedValue = value.replace(/[^0-9]/g, "");

//       // Limita la longitud a 9 dígitos
//       if (formData.Codigo === '2') {
//         const finalValue = cleanedValue
//         setFormData({
//           ...formData,
//           [name]: finalValue
//         });
//       }
//       if (formData.Codigo !== '2') {
//         const finalValue = cleanedValue.slice(0, 9);
//         setFormData({
//           ...formData,
//           [name]: finalValue
//         });
//       }
//       setErrors({
//         ...errors,
//         [name]: formData.Telefono.length >= 0 ? "" : "Solo se puede ingresar números"
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//     }
//   };


//   const [activeStep, setActiveStep] = React.useState(0);

//   const [canProceed, setCanProceed] = useState(false);
//   const [canProceed1, setCanProceed1] = useState(false);
//   console.log(canProceed)
//   console.log(canProceed1)
//   console.log(setCanProceed1)

//   // const [canProceed2, setCanProceed2] = useState(false); // Define canProceed1 state

//   const handleIngresarSolicitud = () => {
//     const validationErrors = {};
//     if (!formData.Nombre) validationErrors.Nombre = "Nombre es requerido";
//     if (!formData.Rut || errors.Rut) validationErrors.Rut = "RUT es requerido y debe ser válido";
//     if (!formData.Email || errors.Email) validationErrors.Email = "Email es requerido y debe ser válido";
//     if (!formData.Confirm_email || errors.Confirm_email) validationErrors.Confirm_email = "Email de Confirmación no coincide";
//     if (!formData.Telefono || errors.Telefono || formData.Telefono.length <= 8) validationErrors.Telefono = "Teléfono es requerido y debe ser válido";
//     if (formData.Tramite === '0') validationErrors.Tramite = "Debe seleccionar un Trámite, es obligatorio";


//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       setCanProceed(true);
//       // handleNext();
//       setActiveStep(1)
//     }
//     else {
//       console.log("Errores en el formulario:", validationErrors);
//     }
//   };




//   async function handleAgendar() {

//     // setCanProceed1(true);
//     // handleNext();

//     //valido
//     // try {
//     const dia = selectedDate.$D.toString().padStart(2, '0');
//     const mes = (selectedDate.$M + 1).toString().padStart(2, '0');
//     const anio = selectedDate.$y;

//     const result = await axios.post(
//       "https://app.soluziona.cl/API_v1_prod/Aporta/API_Aporta_Registro_Civil_Videollamada/api/Ventas/Call/ReservarHora",
//       { dato: anio + '-' + mes + '-' + dia, dato_1: horarioSeleccionado, dato_2: formData.Tramite }
//     );
//     console.log(anio + '-' + mes + '-' + dia)
//     console.log(horarioSeleccionado)
//     if (result.status === 200) {

//       if (result.data[0].detalle === 'Hora no disponible') {
//         alert('La hora ya fue tomada, por favor seleccionar otra hora')
//         obtenerHorarios()


//       }
//       if (result.data[0].detalle === 'Hora tomada con exito') {
//         // alert('La hora ha sido agendada')
//         setActiveStep(2)
//         console.log(result.data[0].id)
//         setFormData({
//           ...formData,
//           ['Idllamada']: result.data[0].id,
//            ['hora_tomada']: horarioSeleccionado,
//           ['dia']: anio + '-' + mes + '-' + dia
//         });
//       }
//     }
//     // } catch (error) {
//     //   // Manejo de errores
//     //   alert("Error al guardar la solicitud");
//     //   console.log("Error Con guardado");

//     // }
//   }

//   useEffect(() => {
//     if (formData.Idllamada != '') {
//       guardarGestion();
//     }
//   }, [formData.Idllamada]);


//   async function guardarGestion() {




//     const result = await axios.post(
//       // "https://app.soluziona.cl/API_v1_prod/Aporta/API_Aporta_Registro_Civil_Videollamada/api/Ventas/Call/GuardaGestion",
   
//       { dato: formData }
//     );

//     if (result.status === 200) {
//       alert('¡Gestión guardada con éxito!')
//     }
//   }





//   const renderStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return (
//           <Grid container justifyContent="center" spacing={2}>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <Grid item xs={12} md={8} lg={6}>
//                 <Card>
//                   <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                       Ingresa tus datos
//                     </Typography>
//                     <Grid container spacing={2} direction="column" sx={{ fontSize: 18 }}>
//                       <Grid item xs={12} sm={12} md={6} lg={6}>
//                         <TextField name="Nombre" label="Nombre" variant="outlined" margin="dense" fullWidth InputProps={{ endAdornment: (<InputAdornment position="end"><PersonIcon /></InputAdornment>), style: { fontSize: 18, height: '50px' } }} InputLabelProps={{ style: { fontSize: 18 } }} sx={{ height: '50px' }} value={formData.Nombre}
//                           onChange={(e) => handleChange(e)} error={!!errors.Nombre}
//                           helperText={errors.Nombre} />
//                       </Grid>
//                       <Grid item xs={12} sm={12} md={6} lg={6}>
//                         <TextField name="Rut" label="Rut" variant="outlined" margin="dense" fullWidth InputProps={{ endAdornment: (<InputAdornment position="end"> <PersonPinIcon /> </InputAdornment>), style: { fontSize: 18, height: '50px' } }} InputLabelProps={{ style: { fontSize: 18 } }} sx={{ height: '50px' }} value={formData.Rut}
//                           onChange={handleChange} error={!!errors.Rut} helperText={errors.Rut} />
//                       </Grid>
//                       <Grid item xs={12} sm={12} md={6} lg={6}>
//                         <TextField name="Email" label="Email" variant="outlined" margin="dense" fullWidth InputProps={{ endAdornment: (<InputAdornment position="end"><EmailIcon /> </InputAdornment>), style: { fontSize: 18, height: '50px' } }} InputLabelProps={{ style: { fontSize: 18 } }} sx={{ height: '50px' }} value={formData.Email}
//                           onChange={handleChange} error={!!errors.Email}
//                           helperText={errors.Email} />
//                       </Grid>
//                       <Grid item xs={12} sm={12} md={6} lg={6}>
//                         <TextField name="Confirm_email" label="Confirmación email" variant="outlined" margin="dense" fullWidth InputProps={{ endAdornment: (<InputAdornment position="end"> <EmailIcon /> </InputAdornment>), style: { fontSize: 18, height: '50px' } }} InputLabelProps={{ style: { fontSize: 18 } }} sx={{ height: '50px' }} value={formData.Confirm_email}
//                           onChange={handleChange} error={!!errors.Confirm_email}
//                           helperText={errors.Confirm_email} />
//                       </Grid>
//                       <Grid item xs={12} sm={12} md={6} lg={6}>
//                         <FormControl fullWidth error={!!errors.Codigo}>
//                           <Box display="flex" alignItems="center">
//                             <InputLabel>Cod.</InputLabel>
//                             <Select
//                               name="Codigo"
//                               label="Cod."
//                               value={formData.Codigo}
//                               onChange={handleChange}
//                               margin="dense"
//                               style={{ marginRight: 0 }}
//                               InputProps={{ style: { fontSize: 18, height: '50px' } }} InputLabelProps={{ style: { fontSize: 18 } }} sx={{ height: '50px' }}
//                             >
//                               <MenuItem value="0">+56</MenuItem>
//                               <MenuItem value="1">+52</MenuItem>
//                               <MenuItem value="2">Extranjero</MenuItem>
//                             </Select>
//                             <TextField name="Telefono" label="Telefono" variant="outlined" margin="dense" fullWidth InputProps={{ endAdornment: (<InputAdornment position="end"> <PhoneIcon /></InputAdornment>), style: { fontSize: 18, height: '50px' } }} InputLabelProps={{ style: { fontSize: 18 } }} sx={{ height: '50px' }} value={formData.Telefono}
//                               onChange={handleChange} error={!!errors.Telefono}
//                               helperText={errors.Telefono}
//                             />
//                           </Box>
//                           {errors.Telefono && <p style={{ color: 'red' }}>{errors.Telefono}</p>}
//                         </FormControl>
//                       </Grid>
//                       <Grid item xs={12} sm={12} md={6} lg={6}>
//                         <FormControl fullWidth>
//                           <InputLabel sx={{ fontSize: 18 }}>Trámite requerido</InputLabel>
//                           <Select name="Tramite"
//                             // value={seleccionFin}
//                             // onChange={(e) => handleChangeTramite(e)}
//                             sx={{ height: '50px', fontSize: 18 }} inputProps={{ endAdornment: (<InputAdornment position="end"> <FindInPageIcon />   </InputAdornment>), style: { fontSize: 18 } }} value={formData.Tramite} onChange={(e) => handleChange(e)} error={!!errors.Tramite}
//                             helperText={errors.Tramite}>
//                             <MenuItem value="0" style={{ fontSize: 18 }}>Selecciona una opción</MenuItem>
//                             <MenuItem value="tramiteuno" style={{ fontSize: 18 }}>Trámite 1</MenuItem>
//                             <MenuItem value="tramitedos" style={{ fontSize: 18 }}>Trámite 2</MenuItem>
//                           </Select>
//                         </FormControl>
//                       </Grid>
//                       <Grid item xs={12} sm={12} md={6} lg={6}>
//                         <TextField name="Obs" label="Observación" margin="dense" multiline
//                           fullWidth InputProps={{ endAdornment: (<InputAdornment position="end"><CommentIcon /> </InputAdornment>), style: { fontSize: 18 } }} InputLabelProps={{ style: { fontSize: 18 } }} sx={{ height: '50px' }} value={formData.Obs} onChange={handleChange} />
//                       </Grid>
//                     </Grid>
//                   </CardContent>
//                   <Box display="flex" justifyContent="center" p={2}>
//                     <Button variant="contained" onClick={handleIngresarSolicitud}>
//                       Ingresar Solicitud
//                     </Button>
//                   </Box>
//                 </Card>
//               </Grid>
//             </LocalizationProvider>
//           </Grid>

//         );
//       case 1:
//         return (
//           <MainCard>
//             <Grid item xs={12} sm={12} md={12} lg={12} className="calendar" adapterLocale="es">
//               <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 3, marginTop: 4, textAlign: 'center' }}>
//                 <Typography variant="h4" >
//                   Ingrese sus datos y lo contactaremos a través de una videoconferencia.
//                 </Typography>
//               </Grid>
//               <Grid container spacing={2} justifyContent="center" alignItems="flex-start">
//                 <Grid item xs={12} md={6}>
//                   <Box
//                     border={1}
//                     p={2}
//                     sx={{
//                       maxWidth: '100%',
//                       minWidth: 0,
//                       minHeight: 0,
//                       overflow: 'auto'
//                     }}
//                   >
//                     <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
//                       <Typography variant="h5">Fecha</Typography>
//                       <DateCalendar
//                         onChange={(newValue) => { setSelectedDate(newValue); }}
//                         value={selectedDate}
//                         minDate={today}
//                         shouldDisableDate={shouldDisableDate}
//                         shouldDisableAllKeyboardEvents
//                         className="custom-date-calendar"
//                       />
//                     </LocalizationProvider>
//                   </Box>
//                 </Grid>
//                 <Grid item xs={12} md={5}>
//                   <Box border={1} p={2}>
//                     <Typography variant="h5">Hora</Typography>
//                     <Box display="flex" flexWrap="wrap" gap={1}>
//                       {selectedDate && data.map((horario, index) => (
//                         <Button
//                           key={index}
//                           variant="contained"
//                           value={horario}
//                           onClick={() => guardarHorario(horario)}
//                           disabled={!selectedDate}
//                           sx={{
//                             flex: '1 1 100px',
//                             bgcolor: horario === horarioSeleccionado ? '#1B5E20' : '#4CB683', // Verde claro si seleccionado, verde oscuro si no
//                             fontSize: 18,
//                             color: '#FFFFFF',
//                             '&:hover': {
//                               bgcolor: horario === horarioSeleccionado ? '#1B5E20' : '#4CB683',
//                             },
//                           }}
//                         >
//                           {horario}
//                         </Button>
//                       ))}
//                     </Box>
//                   </Box>
//                 </Grid>

//                 <Box display="flex" justifyContent="center" p={2}>
//                   <Button variant="contained" onClick={handleAgendar} disabled={disabledFinalizar}>
//                     Agendar
//                   </Button>
//                 </Box>
//               </Grid>
//             </Grid>
//           </MainCard>
//         );
//       case 2:
//         return (
//           <MainCard>
//             <Typography gutterBottom variant="h4" component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'underline', marginBottom: 2 }}>
//               La cita de atención fue agendada para el: {formData.dia} a las {formData.hora_tomada} hrs.
//             </Typography>
//             <Typography gutterBottom variant="h4" component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'underline', marginBottom: 2 }}>
//               El número de su solicitud es N°{formData.Idllamada}
//             </Typography>
//             <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
//               <img src={verde} alt="Imagen Cita Virtual Agendada" width='80%' />
//             </Grid>
//           </MainCard>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <Box sx={{ width: '100%' }}>

//       {/* <Stepper activeStep={activeStep} sx={{ my: 4, ml:'330px', width: '50%' }}>
//         {steps.map((label, index) => (
//           <Step key={label} className='circle'  completed={activeStep > index} >
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper> */}

//       <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel className="QontoStepIcon-circle" StepIconComponent={QontoStepIcon}>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>

//       {renderStepContent(activeStep)}
//     </Box>
//   );
// }
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Typography, Card, CardContent, Box, TextField, Button, Select, FormControl, InputLabel, Grid, MenuItem, Stepper, Step, StepLabel } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import MainCard from 'components/MainCard';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import verde from '../assets/images/verde.png';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 25,
    left: 'calc(-50% + 50px)',
    right: 'calc(50% + 50px)',
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 50,
  alignItems: 'center',

  '& .QontoStepIcon-completedIcon': {
    zIndex: 1,
    fontSize: 42,
    backgroundColor: 'green',
    width: 60,
    height: 60,
    borderRadius: '50%',
  },
  '& .QontoStepIcon-circle': {
    width: 60,
    height: 60,
    borderRadius: '50%',
    backgroundColor: 'orange',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
}));

function QontoStepIcon(props) {
  const { completed, className } = props;

  const icons = {
    0: 0,
    1: 1,
  };

  return (
    <QontoStepIconRoot className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle">{icons[props.icon]}</div>
      )}
    </QontoStepIconRoot>
  );
}

const steps = ['Solicitud', 'Agenda'];

export default function Pasos() {
  const [disabledFinalizar, setDisabledFinalizar] = useState(true);
  const [errors, setErrors] = useState({});
  const today = dayjs();
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);
  const shouldDisableDate = (date) => {
    const dayOfWeek = date.day();
    return dayOfWeek === 0 || dayOfWeek === 6 || date.isBefore(today, 'day');
  };

  const horarios = ['09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'];

  useEffect(() => {
    if (selectedDate != null) {
      obtenerHorariosSimulados();
    }
  }, [selectedDate]);

  const obtenerHorariosSimulados = () => {
    const horariosOcupados = ['10:00', '14:30']; // Simular horarios ocupados
    const horariosDisponibles = horarios.filter(horario => !horariosOcupados.includes(horario));
    setData(horariosDisponibles);
  };

  const [formData, setFormData] = useState({
    Idllamada: '',
    Nombre: '',
    Rut: '',
    Email: '',
    Confirm_email: '',
    Codigo: '0',
    Telefono: '',
    Tramite: '0',
    Obs: '',
    hora_tomada: '',
    dia: ''
  });

  const formatAndValidateRut = (rut) => {
    const cleanedRut = rut.replace(/[^\dkK]/g, '').slice(0, 9);
    let formattedRut = cleanedRut;
    if (cleanedRut.length > 1) {
      formattedRut = cleanedRut.slice(0, cleanedRut.length - 1) + '-' + cleanedRut.slice(-1);
    }
    if (!/^[0-9]+-[0-9kK]{1}$/.test(formattedRut)) {
      return { formattedRut, validationResult: "RUT inválido, el formato es 12345678-9" };
    }
    const [rutNumber, dv] = formattedRut.split("-");
    let total = 0;
    let factor = 2;
    for (let i = rutNumber.length - 1; i >= 0; i--) {
      total += factor * parseInt(rutNumber[i], 10);
      factor = factor === 7 ? 2 : factor + 1;
    }
    const dvCalc = 11 - (total % 11);
    const dvFinal = dvCalc === 11 ? "0" : dvCalc === 10 ? "k" : dvCalc.toString();
    const validationResult = dvFinal.toLowerCase() === dv.toLowerCase() ? "" : "RUT inválido";
    return { formattedRut, validationResult };
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if ((name === "Tramite") && value === '0') {
      alert("Debe seleccionar una Opción");
      return;
    }
    if (name === "Rut") {
      const { formattedRut, validationResult } = formatAndValidateRut(value);
      setFormData({
        ...formData,
        [name]: formattedRut
      });
      setErrors({
        ...errors,
        [name]: validationResult
      });
    } else if (name === "Nombre") {
      const textValue = value.replace(/[^a-zA-Z\s]/g, '');
      setFormData({
        ...formData,
        [name]: textValue
      });
      setErrors({
        ...errors,
        [name]: textValue.length > 0 ? "" : `${name} solo puede contener letras`
      });
    } else if (name === "Email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setFormData({
        ...formData,
        [name]: value
      });
      setErrors({
        ...errors,
        [name]: emailRegex.test(value) ? "" : "Email inválido, el formato es x@x.x"
      });
    } else if (name === "Confirm_email") {
      setFormData({
        ...formData,
        [name]: value
      });
      setErrors({
        ...errors,
        [name]: formData.Email === value ? "" : "Email de Confirmacion no coincide"
      });
    } else if (name === "Telefono") {
      const cleanedValue = value.replace(/[^0-9]/g, "");
      if (formData.Codigo === '2') {
        const finalValue = cleanedValue;
        setFormData({
          ...formData,
          [name]: finalValue
        });
      } else {
        const finalValue = cleanedValue.slice(0, 9);
        setFormData({
          ...formData,
          [name]: finalValue
        });
      }
      setErrors({
        ...errors,
        [name]: formData.Telefono.length >= 0 ? "" : "Solo se puede ingresar números"
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const [activeStep, setActiveStep] = React.useState(0);

  const handleIngresarSolicitud = () => {
    const validationErrors = {};
    if (!formData.Nombre) validationErrors.Nombre = "Nombre es requerido";
    if (!formData.Rut || errors.Rut) validationErrors.Rut = "RUT es requerido y debe ser válido";
    if (!formData.Email || errors.Email) validationErrors.Email = "Email es requerido y debe ser válido";
    if (!formData.Confirm_email || errors.Confirm_email) validationErrors.Confirm_email = "Confirmar Email es requerido y debe ser válido";
    if (!formData.Telefono) validationErrors.Telefono = "Teléfono es requerido y debe ser válido";
    if (formData.Tramite === '0') validationErrors.Tramite = "Debe seleccionar un Trámite";
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setActiveStep(1);
    }
  };
  const handleAgendar = () => {
    if (horarioSeleccionado) {
      setDisabledFinalizar(false); // Habilitar el botón de Finalizar
      setActiveStep(2); // Avanzar al siguiente paso
    } else {

      // Puedes agregar una alerta o mensaje de error si no se ha seleccionado un horario
      console.log('Debes seleccionar un horario disponible');
    }
  };
  
  const guardarHorario = (horario) => {
    setHorarioSeleccionado(horario === horarioSeleccionado ? null : horario);
    setDisabledFinalizar(false); // Habilitar el botón de Finalizar cuando se selecciona un horario
  };
  
  

  const renderStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} md={4} lg={6}>
          <Card>
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                     Ingresa tus datos
                   </Typography>
            <Grid container spacing={2} direction="column">
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField fullWidth name="Nombre" value={formData.Nombre} onChange={handleChange} label="Nombre" error={!!errors.Nombre} helperText={errors.Nombre} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField fullWidth name="Rut" value={formData.Rut} onChange={handleChange} label="RUT" error={!!errors.Rut} helperText={errors.Rut} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField fullWidth name="Email" value={formData.Email} onChange={handleChange} label="Email" error={!!errors.Email} helperText={errors.Email} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField fullWidth name="Confirm_email" value={formData.Confirm_email} onChange={handleChange} label="Confirmar Email" error={!!errors.Confirm_email} helperText={errors.Confirm_email} />
              </Grid>
              <Grid item xs={12} sm={2} md={1} lg={1}>
                <FormControl fullWidth>
                <Box display="flex" alignItems="center">
                  <InputLabel>Código</InputLabel>
                  <Select name="Codigo" value={formData.Codigo} onChange={handleChange}>
                    <MenuItem value="0">+56</MenuItem>
                    <MenuItem value="1">+1</MenuItem>
                    <MenuItem value="2">+34</MenuItem>
                  </Select>
             
                <TextField fullWidth name="Telefono" value={formData.Telefono} onChange={handleChange} label="Teléfono" error={!!errors.Telefono} helperText={errors.Telefono} />
                </Box>
                </FormControl>
               
              </Grid>
              {/* <Grid item xs={12} sm={10} md={5} lg={5}> */}
              {/* </Grid> */}
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth>
                  <InputLabel>Trámite</InputLabel>
                  <Select name="Tramite" value={formData.Tramite} onChange={handleChange}>
                    <MenuItem value="0">Seleccione un trámite</MenuItem>
                    <MenuItem value="1">Trámite 1</MenuItem>
                    <MenuItem value="2">Trámite 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField fullWidth name="Obs" value={formData.Obs} onChange={handleChange} label="Observaciones" multiline rows={4} />
              </Grid>
            </Grid>
            </CardContent>
            <Grid container justifyContent="center" sx={{ m: 2 }}>
              <Button variant="contained" onClick={handleIngresarSolicitud}>Ingresar Solicitud</Button>
            </Grid>
            </Card>
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Box sx={{ mt: 2, width: '100%' }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
                  <DatePicker
                    label="Fecha"
                    value={selectedDate}
                    shouldDisableDate={shouldDisableDate}
                    onChange={(date) => setSelectedDate(date)}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography variant="h6">Horarios Disponibles</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mt: 2 }}>
                    {data.map((horario) => (
                      <Button
                        key={horario}
                        onClick={() => guardarHorario(horario)}
                        sx={{
                          m: 1,
                          height: '50px',
                          // backgroundColor: horarioSeleccionado === horario ? 'green' : 'primary',
                        }}
                      >
                        {horario}
                      </Button>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
            <Button variant="contained" onClick={handleAgendar} disabled={disabledFinalizar}>
    Agendar
  </Button>
            </Grid>
          </Box>
        );
      case 2:
        return (
          <MainCard>
            <Typography gutterBottom variant="h4" component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'underline', marginBottom: 2 }}>
            ¡Hora agendada con éxito!
            </Typography>
            <Typography gutterBottom variant="h4" component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'underline', marginBottom: 2 }}>
            {`Fecha: ${selectedDate ? selectedDate.format('DD/MM/YYYY') : ''}`}
           
            </Typography>
            <Typography gutterBottom variant="h4" component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'underline', marginBottom: 2 }}>{`Hora: ${horarioSeleccionado}`}</Typography>
            <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
              <img src={verde} alt="Imagen Cita Virtual Agendada" width='50%' />
            </Grid>
          </MainCard>
          // <Box sx={{ mt: 2, width: '100%' }}>
          //   <Grid container justifyContent="center" alignItems="center">
          //     <Typography variant="h4">¡Hora agendada con éxito!</Typography>
          //     <Typography variant="h6">{`Fecha: ${selectedDate ? selectedDate.format('DD/MM/YYYY') : ''}`}</Typography>
          //     <Typography variant="h6">{`Hora: ${horarioSeleccionado}`}</Typography>
          //   </Grid>
          // </Box>
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {renderStepContent(activeStep)}
    </Box>
  );
}
