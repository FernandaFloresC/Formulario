
// material-ui
import * as React from 'react';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

// project import
import MainCard from 'components/MainCard';
// import Select_visita from 'components/select/select_visita';
import Select_cita from 'components/select/select_cita';
//import Formulario from 'components/select/formulario';
import { Box, CardHeader } from '@mui/material';
//import Calendario from 'components/Calendario';
const SamplePage = () => {


  // console.log(DateTimePicker.AdapterDayjs + ' aqui')
  return(
  <MainCard title="Agenda tu Matrícula">
 <CardHeader>
  
 </CardHeader>
      <Box my={5}>
       <Select_cita/>
      </Box>

      <Box  my={4}>
       {/* <Calendario/> */}
      
      </Box> 

</MainCard>
  )
  }

export default SamplePage;
