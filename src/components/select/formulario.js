import * as React from 'react';
import MainCard from 'components/MainCard';
import { Typography } from '@mui/material';
// import { useState } from 'react';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


export default function Formulario() {


  return (
    <MainCard title="Card Title" sx={{ height: '100%' }}>

  <Typography variant="h6">Card Subtitle</Typography>

  <Typography variant="caption" color="textSecondary">

    This is card description

  </Typography>

</MainCard>
  );
}