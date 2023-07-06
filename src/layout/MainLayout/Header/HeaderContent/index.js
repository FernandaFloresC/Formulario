//import { useMemo } from 'react';
import logo from '../../../../assets/images/logo.png'
// material-ui
import { Box,useMediaQuery } from '@mui/material';

// project import
//import Search from './Search';
//import Message from './Message';
//import Profile from './Profile';
//import Notification from './Notification';
//import MobileSection from './MobileSection';
//import MegaMenuSection from './MegaMenuSection';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  //const megaMenu = useMemo(() => <MegaMenuSection />, []);

  return (
    <>
      {/* {!matchesXs && <Search />} */}
      {/* {!matchesXs && megaMenu} */}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}
      {/* {!matchesXs && <img src={logo} alt='logo' />} */}
      <img src={logo} alt='logo' width={150} />
      {/* <Typography variant='h6' >Universidad de Las Américas</Typography> */}
      {/* <Notification />
      <Message /> */}
      {/* {!matchesXs && <Profile />} */}
      {/* {matchesXs && <MobileSection />} */}
    </>
  );
};

export default HeaderContent;
