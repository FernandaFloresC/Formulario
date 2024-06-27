import * as React from 'react';
import MainCard from 'components/MainCard';
// material-ui
import { Card, Grid, Typography, CardMedia, Stack, Button } from '@mui/material';
import morado from '../assets/images/morado.png';
import Pasos from './Pasos';
import logo from '../assets/images/logo.jpg';

const Index = () => {

    const [mostrarPasos, setMostrarPasos] = React.useState(false);

    const handleInicioTramite = () => {
        setMostrarPasos(true);
    };

    return (
        <MainCard >
            <MainCard sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', border: '0', backgroundColor: '#ffffff' }}>
        <img src={logo} alt="udla" width={100} />
        <Typography>Videollamada Registro Civil</Typography>
      </MainCard>
            <Card border={1} m={1}>

                <MainCard>
                    <Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 2, gap: 3 }}>
                        Ingresa tus datos para agendar una cita
                    </Typography>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '380px', marginTop: 100  // Ajusta esta altura según sea necesario
                        }}>
                            <CardMedia component="img" height="380" image={morado} alt="Imagen Cita Virtual" style={{
                                display: 'flex', justifyContent: 'center', alignItems: 'center',
                                objectFit: 'cover', // Opciones: 'contain', 'cover', 'fill', 'none', 'scale-down'
                                width: '50%', // Ajusta la anchura al 100% del contenedor
                                height: 'auto' // Ajusta la altura automáticamente
                            }} /> </div>
                        <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 2, gap: 3 }}>
                            <Button variant="contained" margin="dense"
                                onClick={handleInicioTramite}
                            >
                                Iniciar Trámite
                            </Button>
                        </Stack>
                    </Grid>
                </MainCard>

                {mostrarPasos && 

                <Pasos></Pasos>
                
                }

            </Card>
        </MainCard>
    );
};

export default Index;
