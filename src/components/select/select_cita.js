import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, TextField, Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import VideoChatOutlinedIcon from '@mui/icons-material/VideoChatOutlined';
//import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';

import Calendario from 'components/select/Calendario';
//import campus from '../../assets/images/campus-udla.jpg';
import cita from '../../assets/images/morado.png';
// import cita from '../../assets/images/cita-udla.jpeg';


export default function Select_cita() {
  const [seleccion] = useState();
 // const [visita, setVisita] = useState();
  const [mostrarCalendario] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [mostrarCalendario2] = useState(false);
  const [selectedDate2, setSelectedDate2] = useState(null);

  // const SelectVisita = () => {
  //   if(setVisita !== '0'){
  //     setSeleccion('Selecciona un Campus')
  //   }
  // };


  return (
    <Grid container>
      <Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <VideoChatOutlinedIcon  /> Agenda tu cita virtual
              </Typography>
              <CardMedia component="img" height="240" width="300" image={cita} alt="Imagen Cita Virtual" />
              <Box my={1}>
                <FormControl fullWidth>
                  <Box  >

                    <TextField id="nombre" label="Nombre" fullWidth variant="standard" margin="dense" />
                    <TextField id="correo" label="Correo Electronico" fullWidth variant="standard" margin="dense" />
                    <TextField id="telefono" label="Telefono" fullWidth variant="standard" margin="dense" />
                    <TextField id="rut" label="Rut" fullWidth variant="standard" margin="dense" />
                    <TextField id="comentario" fullWidth label="Comentario" margin="dense"
                      multiline rows={5} />

                    <Button variant="contained" margin="dense" onClick={() => Guardar()}>
                      Programar Evento
                    </Button>

                  </Box>
                </FormControl>
              </Box>
            </CardContent>
          </CardActionArea>
        </Grid>
      </Grid>



      <Grid>
        <Grid >
          <Grid>
            {mostrarCalendario && (
              <Box sx={{ minWidth: 650 }}>
                <Calendario sede={seleccion} selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
              </Box>
            )}
            {mostrarCalendario2 && (
              <Box sx={{ minWidth: 650 }}>
                <Calendario sede={visita} selected={selectedDate2} onChange={(date) => setSelectedDate2(date)} />
              </Box>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}



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
// //import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';

// import Calendario from 'components/select/Calendario';
// //import campus from '../../assets/images/campus-udla.jpg';
// import cita from '../../assets/images/morado.png';
// // import cita from '../../assets/images/cita-udla.jpeg';


// export default function Select_cita() {
//   const [seleccion, setSeleccion] = useState();
//  // const [visita, setVisita] = useState();
//   const [mostrarCalendario, setMostrarCalendario] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [mostrarCalendario2, setMostrarCalendario2] = useState(false);
//   const [selectedDate2, setSelectedDate2] = useState(null);

//   // const SelectVisita = () => {
//   //   if(setVisita !== '0'){
//   //     setSeleccion('Selecciona un Campus')
//   //   }
//   // };


//   return (
//     <Grid container>
//       <Grid>

//         <Grid item xs={12} sm={12} md={12} lg={12}>
//           <CardActionArea>
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 <VideoChatOutlinedIcon  /> Agenda tu cita virtual
//               </Typography>
//               <CardMedia component="img" height="240" width="300" image={cita} alt="Imagen Cita Virtual" />
//               <Box my={1}>
//                 <FormControl fullWidth>
//                   <InputLabel id="demo-simple-select-label">
//                     Selecciona una Sede
//                   </InputLabel>
//                   {/* <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={seleccion}
//                     label="Selecciona una Sede"
//                     onChange={(e) => {
//                       setSeleccion(e.target.value);
//                       setMostrarCalendario(true);
//                       setMostrarCalendario2(false);
//                     }}
//                   >
//                     {console.log(seleccion)}
//                     <MenuItem value={'Selecciona un Campus'}>Selecciona un Campus</MenuItem>
//                     <MenuItem value={'Santiago Centro'}>Santiago Centro</MenuItem>
//                     <MenuItem value={'La Florida'}>La Florida</MenuItem>
//                     <MenuItem value={'Maipu'}>Maipú</MenuItem>
//                     <MenuItem value={'Providencia'}>Providencia</MenuItem>
//                     <MenuItem value={'Vina del mar'}>Viña del Mar</MenuItem>
//                     <MenuItem value={'Regimen Online'}>Régimen Online</MenuItem>
//                     <MenuItem value={'Concepcion'}>Concepción</MenuItem>
//                   </Select> */}
//                 </FormControl>
//               </Box>
//             </CardContent>
//           </CardActionArea>
//         </Grid>
//       </Grid>



//       <Grid>
//         <Grid >
//           <Grid>
//             {mostrarCalendario && (
//               <Box sx={{ minWidth: 650 }}>
//                 <Calendario sede={seleccion} selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
//               </Box>
//             )}
//             {mostrarCalendario2 && (
//               <Box sx={{ minWidth: 650 }}>
//                 <Calendario sede={visita} selected={selectedDate2} onChange={(date) => setSelectedDate2(date)} />
//               </Box>
//             )}
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// }
