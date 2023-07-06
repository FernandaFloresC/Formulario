import * as React from 'react';

import MainCard from 'components/MainCard';
import Select_cita from 'components/select/select_cita';
import Horario from 'components/select/Horarios';

// material-ui
import { Box, Card } from '@mui/material';

const SamplePage = () => {
  // console.log(DateTimePicker.AdapterDayjs + ' aqui')
  return (
    
       <Card sx={{ borderColor: '#FF5200' }} border={1} m={1}> 
       <MainCard title="Agenda tu Matrícula">
      <Box my={5} >
        <Select_cita />
      </Box>
      <Box my={5} >
        <Horario />
      </Box>
      </MainCard>
      </Card>
    
  );
};

export default SamplePage;
