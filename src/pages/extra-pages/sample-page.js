import * as React from 'react';

import MainCard from 'components/MainCard';
import Select_cita from 'components/select/select_cita';

// material-ui
import { Box } from '@mui/material';

const SamplePage = () => {
  // console.log(DateTimePicker.AdapterDayjs + ' aqui')
  return (
    <MainCard title="Agenda tu Matrícula">
      <Box my={5}>
        <Select_cita />
      </Box>
    </MainCard>
  );
};

export default SamplePage;
