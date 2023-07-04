
// material-ui
import * as React from 'react';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

// project import
import MainCard from 'components/MainCard';
// import Select_visita from 'components/select/select_visita';
import Select_cita from 'components/select/select_cita';
import { Box, CardHeader } from '@mui/material';

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
       {/* <Select_visita/> */}
      </Box> 

  {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
     <DateTimePicker label="Basic date time picker" />
        </LocalizationProvider> */}

</MainCard>
  )
  }

export default SamplePage;
