import { Link } from 'react-router-dom';

// project import
import { APP_DEFAULT_PATH } from 'config';

// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Button, Grid, Stack, Typography } from '@mui/material';
import logo from '../../assets/images/logo.jpg'
// assets
// import error500 from 'assets/images/maintenance/Error500.png';

// ==============================|| ERROR 500 - MAIN ||============================== //

function Error500() {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
        {/* <Grid item xs={12}>
          <Box sx={{ width: { xs: 350, sm: 396 } }}>
            <img src={error500} alt="mantis" style={{ height: '100%', width: '100%' }} />
          </Box>
        </Grid> */}
        <Grid item xs={12}>
           <img src={logo} alt='imagen' width={400}/>
          <Stack justifyContent="center" alignItems="center">
         
            <Typography align="center" variant={matchDownSM ? 'h2' : 'h1'}>
              Gracias por agendar
            </Typography>
           
            {/* <Typography color="textSecondary" variant="body2" align="center" sx={{ width: { xs: '73%', sm: '70%' }, mt: 1 }}>
              Server error 500. we fixing the problem. please try again at a later stage.
            </Typography> */}
            <Button component={Link} to={APP_DEFAULT_PATH} variant="contained" sx={{ color:'white', mt: 4 }}>
              Volver
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default Error500;
