import * as React from 'react';
import MainCard from 'components/MainCard';
import { Card, Grid, Typography,  Stack, Button, Box } from '@mui/material';
import morado from '../assets/images/morado.png';
import Pasos from './Pasos';
//import Pasos from '../pages/extra-pages/Pasos' //el de prueba
import logo from '../assets/images/logo.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Index = () => {
    const [inicioTramite, setInicioTramite] = React.useState(false);

    const handleInicioTramite = () => {
        setInicioTramite(true);
    };

    return (
        <MainCard sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', border: '0', backgroundColor: '#ffffff' }}>
                    <img src={logo} alt="logo" width='10%' />
                    <Typography variant='h3' sx={{ margin:4}}>Videollamada Registro Civil</Typography>
            </Box>
            {!inicioTramite ? (
                <Card border={1} m={1}>
                   
                        <Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 2, gap: 3 }}>
                            Ingresa tus datos para agendar una cita
                        </Typography >
                        <Grid item xs={12} sm={12} md={12} lg={12} >
                                {/* <CardMedia component="img" width={10} image={morado} alt="Imagen Cita Virtual" 
                                 /> */}
                                 <Grid sx={{ display: 'flex', justifyContent: 'center', minHeight: '250px' }}>
                                 <img src={morado} alt="Imagen Cita Virtual" width='70%' />
                                 </Grid>
                                 
                            <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom:3 }}>
                                <Button variant="contained" margin="dense" onClick={handleInicioTramite}>
                                    Iniciar Trámite  <ArrowForwardIcon/>
                                </Button>
                            </Stack>
                        </Grid>
                   
                </Card>
            ) : (
                <Pasos />
            )}
        </MainCard>
    );
};

export default Index;
