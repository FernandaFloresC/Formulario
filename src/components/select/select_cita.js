// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import Box from '@mui/material/Box';
// import { useState } from 'react';

// import Calendario from 'components/Calendario';

// export default function Select_cita() {

//   const [seleccion, setSeleccion] = useState();
//   const [visita, setVisita] = useState();

// const [mostrarCalendario, setMostrarCalendario] = useState(false)
  
//   return (
//     <Box>
      
//       <Box>
//         <Box  sx={{ maxWidth: 345 , borderColor: '#FF5200'}} border={1} m={1}>
//           <CardActionArea>
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 Admisión ? <br></br>
//                 Agendar entrevista <br></br>
//                 30 min
//               </Typography>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image="/static/images/cards/contemplative-reptile.jpg"
//                 alt="Imagen Cita Virtual"
               
//               />
             
//               <Box sx={{ minWidth: 120 }}>
              
//                 <FormControl fullWidth>
//                   <InputLabel 
                  
//                    bgcolor="#FF5200"id="demo-simple-select-label">Selecciona una Sede</InputLabel>
//                   <Select
//                // sx={{ borderColor: '#FF5200' }}
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={seleccion}
//                     label="Selecciona una Sede"
//                     //onChange={handleSelectSede}
//                     onChange={e => setSeleccion(e.target.value)}
//                   //onChange={handleChange}
//                   >{console.log(seleccion)}
//                     <MenuItem value={0}>Selecciona una Sede</MenuItem>
//                     <MenuItem value={'santiago_centro'}>Santiago Centro</MenuItem>
//                     <MenuItem value={'la_florida'}>La Florida</MenuItem>
//                     <MenuItem value={'maipu'}>Maipú</MenuItem>
//                     <MenuItem value={'providencia'}>Providencia</MenuItem>
//                     <MenuItem value={'vina_del_mar'}>Viña del Mar</MenuItem>
//                     <MenuItem value={'regimen_online'}>Régimen Online</MenuItem>
//                     <MenuItem value={'concepcion'}>Concepción</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Box>
//             </CardContent>
//           </CardActionArea>

//            {mostrarCalendario === true &&  (
//           <Box sx={{ minWidth: 420 }}>
//            <Calendario selected={seleccion} onChange={e => setMostrarCalendario(e.target.value)} />
//           </Box>
//           )}
//         </Box>
        
//       </Box>

//       <Box my={5}>
//         <Card sx={{ maxWidth: 345 }}>
//           <CardActionArea>

//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 Admisión ?
//                 Agendar Visita
//                 45 min
//               </Typography>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image="/static/images/cards/contemplative-reptile.jpg"
//                 alt="imagen visita campus"
//               />
//               <Box sx={{ minWidth: 120 }}>
//                 <FormControl fullWidth>
//                   <InputLabel id="demo-simple-select-label">Selecciona un Campus</InputLabel>
//                   <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={visita}
//                     label="Selecciona un Campus"
//                     onChange={e => setVisita(e.target.value)}
//                   //onChange={handleChange}
//                   >{console.log(visita)}
//                     <MenuItem value={0}>Selecciona un Campus</MenuItem>
//                     <MenuItem value={'santiago_centro'}>Santiago Centro</MenuItem>
//                     <MenuItem value={'la_florida'}>La Florida</MenuItem>
//                     <MenuItem value={'maipu'}>Maipú</MenuItem>
//                     <MenuItem value={'providencia'}>Providencia</MenuItem>
//                     <MenuItem value={'vina_del_mar'}>Viña del Mar</MenuItem>
//                     <MenuItem value={'regimen_online'}>Régimen Online</MenuItem>
//                     <MenuItem value={'concepcion'}>Concepción</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Box>
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       </Box>
//     </Box>
//   );
// }

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { useState } from 'react';

import Calendario from 'components/Calendario';

export default function Select_cita() {
  const [seleccion, setSeleccion] = useState();
  const [visita, setVisita] = useState();
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); // Estado para la fecha seleccionada

  return (
    <Box>
      <Box>
        <Box sx={{ maxWidth: 345, borderColor: '#FF5200' }} border={1} m={1}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Admisión ? <br />
                Agendar entrevista <br />
                30 min
              </Typography>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="Imagen Cita Virtual"
              />
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel bgcolor="#FF5200" id="demo-simple-select-label">
                    Selecciona una Sede
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={seleccion}
                    label="Selecciona una Sede"
                    onChange={(e) => {
                      setSeleccion(e.target.value);
                      setMostrarCalendario(true); // Mostrar el calendario cuando se seleccione una sede
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

          {mostrarCalendario === true && (
            <Box sx={{ minWidth: 420 }}>
              <Calendario selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
            </Box>
          )}
        </Box>
      </Box>

      <Box my={5}>
         <Card sx={{ maxWidth: 345 }}>
           <CardActionArea>
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                 Admisión ?
                 Agendar Visita
                 45 min
               </Typography>
               <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="imagen visita campus"
              />
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Selecciona un Campus</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={visita}
                    label="Selecciona un Campus"
                    onChange={e => setVisita(e.target.value)}
                  //onChange={handleChange}
                  >{console.log(visita)}
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
        </Card>
      </Box>
      </Box>
  );
}
