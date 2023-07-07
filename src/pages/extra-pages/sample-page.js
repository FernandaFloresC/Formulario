import * as React from 'react';

import MainCard from 'components/MainCard';
import Select_cita from 'components/select/select_cita';

// material-ui
import { Card } from '@mui/material';
import Grid from '@mui/material/Grid';

const SamplePage = () => {
  
  // console.log(DateTimePicker.AdapterDayjs + ' aqui')
  return (
    <Grid>
       <Card border={1} m={1}> 
       <MainCard title="Agenda tu Matrícula">
        <Select_cita />
      </MainCard>
      </Card>
      </Grid>
  );
};

export default SamplePage;
