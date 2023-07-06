import * as React from 'react';
import MainCard from 'components/MainCard';
import { Typography, Box, Button, Stack } from '@mui/material';
import { useEffect, useState  } from 'react';
import Formulario from './formulario';
//import axios from "axios";

// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


export default function Horario({flujo}) {
    const [data, setData]= useState([]);
    const [selectedHorario, setSelectedHorario] = useState('');
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    console.log(flujo)

    useEffect(() => {

        Datos()

    }, []);

    const Datos = (async () => {
        // const result = await axios.post('https://app.soluziona.cl/API_v1_prod/Aporta/API_Aporta_RegistroCivil_CRM/api/Ventas_CRM/CRM/DashTrafico/Intervalo/Acumulado/Estatico2',
        //     { dato: 9999 },
        //     { headers: { "Authorization": `Bearer ${sesiones.stoken}` } })

        // if (result.status === 200) {

        //     console.log(result.data)
        //     setData(result.data);
        // }
        // else {
        //     console.log("error")
        // }
        const horarios = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
        setData(horarios)
        console.log(horarios)
    })


  const Guardar = async (horario) => {
    setSelectedHorario(horario);
    console.log(selectedHorario)
    setMostrarFormulario(true)

  }



  return (
    <MainCard title={"fecha" + flujo}  sx={{ height: '100%' }}>

      <Typography id='horario' variant="h6">Horario</Typography>
      {/* <Typography variant="h6">Espacio para la data que me llega desde los demas componentes</Typography> */}
      
      <Box sx={{ maxWidth: 500}} >
         {data.map((horarios, index) => (
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: '24px 16px 0px', mt: 'auto'}} key={index}>
          <Button color='warning' variant="contained"value={horarios} id={index} 
            onClick={() => Guardar(horarios)}> {horarios}
          </Button>
          </Stack>
        ))}
      <p>Horario seleccionado: {selectedHorario}</p>

      </Box>
      {mostrarFormulario === true &&   (
      <Box sx={{ maxWidth: 500}} >
         <Formulario/>

      </Box>
      )}
    </MainCard>
  );
}