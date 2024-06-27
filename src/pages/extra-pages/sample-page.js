import * as React from 'react';

import MainCard from 'components/MainCard';
// import Select_cita from 'components/select/select_cita';

// material-ui
import { Card } from '@mui/material';
import Grid from '@mui/material/Grid';
import Pasos from './Pasos';

const SamplePage = () => {

  // console.log(DateTimePicker.AdapterDayjs + ' aqui')
  return (
    <MainCard sx={{ width: '100%' }}>
      <Card border={1} m={1}>
        <Grid>
          {/* <Select_cita /> */}
          <Pasos></Pasos>
        </Grid>
      </Card>
    </MainCard>
  );
};

export default SamplePage;
