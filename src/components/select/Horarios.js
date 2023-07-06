import * as React from 'react';
import MainCard from 'components/MainCard';
import { Typography, Box, Button } from '@mui/material';
import { useEffect, useState  } from 'react';
//import axios from "axios";

// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


export default function Horario() {
    const [data, setData]= useState([]);
    const [selectedHorario, setSelectedHorario] = useState('');



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

  }



  return (
    <MainCard title="Agendar Entrevista (logo)" sx={{ height: '100%' }}>

      <Typography id='horario' variant="h6">Horario</Typography>
      {/* <Typography variant="h6">Espacio para la data que me llega desde los demas componentes</Typography> */}

      <Box sx={{ maxWidth: 500}} >
         {data.map((horarios, index) => (
            <Button variant="contained" color="secondary" key={index} value={horarios} id={index} onClick={() => Guardar(horarios)}> {horarios}</Button>
        ))}
      <p>Horario seleccionado: {selectedHorario}</p>

      </Box>

    </MainCard>
  );
}