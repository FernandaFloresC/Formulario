// import * as React from 'react';
// import { useState } from 'react';
// import Grid from '@mui/material/Grid';

// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import Box from '@mui/material/Box';
// import VideoChatOutlinedIcon from '@mui/icons-material/VideoChatOutlined';
// import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';

// import Calendario from 'components/select/Calendario';
// import campus from '../../assets/images/campus-udla.jpg';
// import cita from '../../assets/images/cita-udla.jpeg';

// export default function Select_cita() {
//   const [seleccion, setSeleccion] = useState();
//   const [visita, setVisita] = useState();
//   const [mostrarCalendario, setMostrarCalendario] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [mostrarCalendario2, setMostrarCalendario2] = useState(false);
//   const [selectedDate2, setSelectedDate2] = useState(null);

//   return (
//     <Grid container spacing={2}>

//       <Grid spacing={1}>
//       <Grid item xs={12} md={4} lg={4} xl={4}>
//         <CardActionArea>
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               <VideoChatOutlinedIcon sx={{ color: '#FF5200' }}/> Agenda tu cita virtual
//             </Typography>
//             <CardMedia component="img" height="240" width="300" image={cita} alt="Imagen Cita Virtual" />
//             <Box my={1} sx={{ minWidth: 150, maxWidth: '345' }}>
//               <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">
//                   Selecciona una Sede
//                 </InputLabel>
//                 <Select labelId="demo-simple-select-label" id="demo-simple-select" value={seleccion} label="Selecciona una Sede"
//                      onChange={(e) => {
//                        setSeleccion(e.target.value);
//                        setMostrarCalendario(true);
//                        setMostrarCalendario2(false)
                      
//                        // Mostrar el calendario cuando se seleccione una sede
//                      }}
//                    >{console.log(seleccion)}
//                      <MenuItem value={0}>Selecciona un Campus</MenuItem>
//                      <MenuItem value={'santiago_centro'}>Santiago Centro</MenuItem>
//                      <MenuItem value={'la_florida'}>La Florida</MenuItem>
//                      <MenuItem value={'maipu'}>Maipú</MenuItem>
//                      <MenuItem value={'providencia'}>Providencia</MenuItem>
//                     <MenuItem value={'vina_del_mar'}>Viña del Mar</MenuItem>
//                   <MenuItem value={'regimen_online'}>Régimen Online</MenuItem>
//                     <MenuItem value={'concepcion'}>Concepción</MenuItem>
//                    </Select>
//               </FormControl>
//             </Box>
//           </CardContent>
//         </CardActionArea>
//       </Grid>

//       <Grid item xs={12} md={4} lg={4} xl={4}>
//         <CardActionArea>
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               <HomeWorkOutlinedIcon sx={{ color: '#FF5200' }}/> Visita nuestros campus
//             </Typography>
//             <CardMedia component="img" height="240" width="300" image={campus} alt="imagen visita campus"  />
//             <Box my={1} sx={{ minWidth: 150, maxWidth: '345' }}>
//               <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">Selecciona un Campus</InputLabel>
//                 <Select labelId="demo-simple-select-label" id="demo-simple-select" value={visita}  label="Selecciona un Campus"
//                      onChange={(e) => {
//                        setVisita(e.target.value);
//                        setMostrarCalendario(false);
//                        setMostrarCalendario2(true); // Mostrar el calendario cuando se seleccione una sede
//                     }}
//                    >{console.log(visita)}
//                      <MenuItem value={0}>Selecciona un Campus</MenuItem>
//                      <MenuItem value={'santiago_centro'}>Santiago Centro</MenuItem>
//                      <MenuItem value={'la_florida'}>La Florida</MenuItem>
//                      <MenuItem value={'maipu'}>Maipú</MenuItem>
//                      <MenuItem value={'providencia'}>Providencia</MenuItem>
//                     <MenuItem value={'vina_del_mar'}>Viña del Mar</MenuItem>
//                     <MenuItem value={'regimen_online'}>Régimen Online</MenuItem>
//                     <MenuItem value={'concepcion'}>Concepción</MenuItem>
//                    </Select>
//               </FormControl>
//             </Box>
//           </CardContent>
//         </CardActionArea>
//       </Grid>

//       </Grid>


// <Grid container spacing={1}>
      
//         {mostrarCalendario && (
//           <Grid xs={12} md={8} lg={8} xl={8}>
//             <Calendario xs={12} sx={{ minWidth: 590 }} sede={seleccion} selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
//           </Grid>
//         )}
//         {mostrarCalendario2 && (
//            <Grid xs={12} md={8} lg={8} xl={8}>
//             <Calendario sede={visita} selected={selectedDate2} onChange={(date) => setSelectedDate2(date)} />
//           </Grid>
//         )}
      
      
//       </Grid>
//     </Grid>
//   );
// }


import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import VideoChatOutlinedIcon from '@mui/icons-material/VideoChatOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';

import Calendario from 'components/select/Calendario';
import campus from '../../assets/images/campus-udla.jpg';
import cita from '../../assets/images/cita-udla.jpeg';

export default function Select_cita() {
  const [seleccion, setSeleccion] = useState();
  const [visita, setVisita] = useState();
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [mostrarCalendario2, setMostrarCalendario2] = useState(false);
  const [selectedDate2, setSelectedDate2] = useState(null);

  return (
    <Grid container spacing={2}>
      <Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <VideoChatOutlinedIcon sx={{ color: '#FF5200' }}/> Agenda tu cita virtual
            </Typography>
            <CardMedia component="img" height="240" width="300" image={cita} alt="Imagen Cita Virtual" />
            <Box my={1} sx={{ minWidth: 150, maxWidth: '345' }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Selecciona una Sede
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={seleccion}
                  label="Selecciona una Sede"
                  onChange={(e) => {
                    setSeleccion(e.target.value);
                    setMostrarCalendario(true);
                    setMostrarCalendario2(false);
                  }}
                >
                  <MenuItem value={0}>Selecciona un Campus</MenuItem>
                     <MenuItem value={'santiago_centro'}>Santiago Centro</MenuItem>
                     <MenuItem value={'la_florida'}>La Florida</MenuItem>
                     <MenuItem value={'maipu'}>Maipú</MenuItem>
                     <MenuItem value={'providencia'}>Providencia</MenuItem>
                    <MenuItem value={'vina_del_mar'}>Viña del Mar</MenuItem>
                  <MenuItem value={'regimen_online'}>Régimen Online</MenuItem>
                    <MenuItem value={'concepcion'}>Concepción</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </CardContent>
        </CardActionArea>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <HomeWorkOutlinedIcon sx={{ color: '#FF5200' }}/> Visita nuestros campus
            </Typography>
            <CardMedia component="img" height="240" width="300" image={campus} alt="imagen visita campus"  />
            <Box my={1} sx={{ minWidth: 150, maxWidth: '345' }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Selecciona un Campus</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={visita}
                  label="Selecciona un Campus"
                  onChange={(e) => {
                    setVisita(e.target.value);
                    setMostrarCalendario(false);
                    setMostrarCalendario2(true);
                  }}
                >
                  <MenuItem value={0}>Selecciona un Campus</MenuItem>
                     <MenuItem value={'santiago_centro'}>Santiago Centro</MenuItem>
                     <MenuItem value={'la_florida'}>La Florida</MenuItem>
                     <MenuItem value={'maipu'}>Maipú</MenuItem>
                     <MenuItem value={'providencia'}>Providencia</MenuItem>
                    <MenuItem value={'vina_del_mar'}>Viña del Mar</MenuItem>
                    <MenuItem value={'regimen_online'}>Régimen Online</MenuItem>
                    <MenuItem value={'concepcion'}>Concepción</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </CardContent>
        </CardActionArea>
      </Grid>
      </Grid>
      <Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid>
          {mostrarCalendario && (
            <Grid item xs={12}>
              <Calendario xs={12} sx={{ minWidth: 590 }} sede={seleccion} selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
            </Grid>
          )}
          {mostrarCalendario2 && (
            <Grid item xs={12}>
              <Calendario sede={visita} selected={selectedDate2} onChange={(date) => setSelectedDate2(date)} />
            </Grid>
          )}
        </Grid>
      </Grid>
      </Grid>
    </Grid>
  );
}
