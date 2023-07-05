import * as React from 'react';
import MainCard from 'components/MainCard';
import { Typography, Box, TextField, Button } from '@mui/material';
// import { useState } from 'react';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


export default function Formulario() {

  const Guardar = async () => {

    const nombre = document.getElementById('nombre').value
    const correo = document.getElementById('correo').value
    const telefono = document.getElementById('telefono').value
    const rut = document.getElementById('rut').value
    const comentario = document.getElementById('comentario').value

    if(nombre === '' || correo === '' || telefono === '' || rut === '' || comentario === ''){

      console.log('rellena los campos por favor')
    }else{
      console.log('campos listos')
    }


  }



  return (
    <MainCard title="Formulario"  sx={{ height: '100%' }}>

      <Typography variant="h6">Introduzca los detalles</Typography>
      {/* <Typography variant="h6">Espacio para la data que me llega desde los demas componentes</Typography> */}

      <Box sx={{ maxWidth: 500}} >

      <TextField id="nombre" label="Nombre" fullWidth variant="standard"  margin="dense"/> 

      <TextField id="correo" label="Correo Electronico" fullWidth variant="standard" margin="dense" />

      <TextField id="telefono" label="Telefono" fullWidth variant="standard"   margin="dense"/>

      <TextField id="rut" label="Rut" fullWidth variant="standard"  margin="dense" />

      <TextField id="comentario" fullWidth label="Comentario"  margin="dense"
      multiline rows={5} />


      <Button variant="contained" color="error" margin="dense" onClick={() => Guardar()}> 
      {/* onClick={(e) => Guardar() */}
        Programar Evento
      </Button>

      </Box>

    </MainCard>
  );
}