
// material-ui
import {  Stack, Typography} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Footer = () => (

  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: '24px 16px 0px', mt: 'auto' }}>
    <Typography variant="caption">&copy; Copyright 2021 Soluziona <br/> Todos los derechos reservados</Typography>
    <Stack spacing={1.5} direction="row" justifyContent="space-between" alignItems="center">
      <MailOutlineIcon/>
    <Typography variant="caption">
     soporte@soluziona.cl 
    </Typography>
    </Stack>
  </Stack>
);

export default Footer;
