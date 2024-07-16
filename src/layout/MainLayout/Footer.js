
// material-ui
import { Stack, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Footer = () => (

  // const copiarAlPortapapeles = async () => {
  //   try {
  //     await navigator.clipboard.writeText(valorPegar);
  //     toast.success("Correo copiado en portapapeles");
  //   } catch (err) {
  //     toast.error("Error al copiar");
  //   }
  // };

// return(
  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: '24px 16px 0px', mt: 'auto' }}>
  <Typography sx={{ color: '#D89F9E' }} variant="caption">
    &copy; Fernanda Flores Castro <br /> Todos los derechos reservados
  </Typography>



  {/* <Button variant="contained" onClick={copiarAlPortapapeles}>
            Copiar correo
          </Button> */}
  <Stack spacing={1.5} direction="row" justifyContent="space-between" alignItems="center">
    <MailOutlineIcon sx={{ color: '#D89F9E' }} />
    <Typography sx={{ color: '#D89F9E' }} variant="caption">
      fernanda.flores.c.99@gmail.com
    </Typography>
  </Stack>
</Stack>
);
// )

export default Footer;
