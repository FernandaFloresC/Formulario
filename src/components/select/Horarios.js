import * as React from 'react';
import MainCard from 'components/MainCard';
import { Typography, Box, Button, Stack } from '@mui/material';
import { useEffect, useState  } from 'react';
import Formulario from './formulario';
//import axios from "axios";
import dayjs from 'dayjs';
// import 'dayjs/locale/es';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

// dayjs.locale('es');

export default function Horario({ flujo , sede}) {

  const formattedDate = dayjs(flujo).format('D MMMM YYYY');

    const [data, setData]= useState([]);
    const [selectedHorario, setSelectedHorario] = useState('');
    const [showFormulario, setShowFormulario] = useState(false);
    //const [form_visible, setForm_visible] = useState(false);
    console.log(flujo)
    console.log(formattedDate)

    useEffect(() => {
      obtenerHorarios();
    }, []);
  
    const obtenerHorarios = () => {
      const horarios = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
      setData(horarios);
    };
  
    const guardarHorario = (horario) => {
      setSelectedHorario(horario);
      setShowFormulario(true);
    };

  //   useEffect(() => {

  //       Datos()

  //   }, []);

  //   const Datos = (async () => {
  //       // const result = await axios.post('https://app.soluziona.cl/API_v1_prod/Aporta/API_Aporta_RegistroCivil_CRM/api/Ventas_CRM/CRM/DashTrafico/Intervalo/Acumulado/Estatico2',
  //       //     { dato: 9999 },
  //       //     { headers: { "Authorization": `Bearer ${sesiones.stoken}` } })

  //       // if (result.status === 200) {

  //       //     console.log(result.data)
  //       //     setData(result.data);
  //       // }
  //       // else {
  //       //     console.log("error")
  //       // }
  //       const horarios = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
  //       setData(horarios)
  //       console.log(horarios)
  //   })


  // const Guardar = async (horario) => {
  //   setSelectedHorario(horario);
  //   console.log(selectedHorario)
  //   setMostrarFormulario(true)
  //   setForm_visible(true)

  // }



  return (

    <MainCard>
      {!showFormulario ? (
         <MainCard title={`Fecha ${formattedDate} - Sede ${sede}`}>
        <Box>
          <Typography variant="h6">Horario</Typography>
          {data.map((horario, index) => (
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: '24px 16px 0px', mt: 'auto' }} key={index}>
              <Button sx={{backgroundColor:'#FF5200', color:'white'}} fullWidth variant="outlined" value={horario} onClick={() => guardarHorario(horario)}>
                {horario}
              </Button>
            </Stack>
          ))}
        </Box>
        </MainCard>
      ) : (
        <Box sx={{ maxWidth: 650 }}>
          <Formulario sede={sede} formattedDate={formattedDate} selectedHorario={selectedHorario} showFormulario={showFormulario}/>
        </Box>
      )}
    </MainCard>
  );
}