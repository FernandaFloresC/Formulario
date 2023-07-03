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

// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function Select_cita() {

    const [seleccion, setSeleccion] = useState();

    // const [santiago_centro, setSantiago_centro] = React.useState('');

    
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Admisión ? <br></br>
Agendar entrevista <br></br>
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
        <InputLabel id="demo-simple-select-label">Selecciona una Sede</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={seleccion}
          label="Selecciona una Sede"
          onChange={e => setSeleccion(e.target.value)}
          //onChange={handleChange}
        >{console.log(seleccion)}
             <MenuItem value={0}>Selecciona una Sede</MenuItem>
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
      <Box>
 {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
     <DateTimePicker label="Basic date time picker" />
        </LocalizationProvider> */}
      </Box>
    </Card>
  );
}