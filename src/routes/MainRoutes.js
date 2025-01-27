import { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
// import CommonLayout from 'layout/CommonLayout';
import Loadable from 'components/Loadable';
//import AuthGuard from 'utils/route-guard/AuthGuard';
// import AuthGuard from 'utils/route-guard/AuthGuard';

// pages routing
// const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/404')));
// const MaintenanceError500 = Loadable(lazy(() => import('pages/maintenance/500')));
// const MaintenanceUnderConstruction = Loadable(lazy(() => import('pages/maintenance/under-construction')));
// const MaintenanceComingSoon = Loadable(lazy(() => import('pages/maintenance/coming-soon')));

// // render - sample page
 const Pasos = Loadable(lazy(() => import('../pages/Pasos')));
// const HorizontalNonLinearStepper = Loadable(lazy(() => import('pages/extra-pages/StepByStep')));


const Index = Loadable(lazy(() => import('../pages/Index')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <MainLayout />
      
      ),
      children: [
        {
          path: '',
          element: <Index />
        },
        {
          path: 'Tramite',
          element: <Pasos />
        },
        // {
        //   path: 'StepByStep',
        //   element: <HorizontalNonLinearStepper />
        // },
        // {
        //   path: 'fin',
        //   element: <MaintenanceError500 />
        // }
      ]
    }
    // {
    //   path: 'maintenance',
    //   element: <CommonLayout />,
    //   children: [
    //     {
    //       path: '404',
    //       element: <MaintenanceError />
    //     },
    //     {
    //       path: '500',
    //       element: <MaintenanceError500 />
    //     },
    //     {
    //       path: 'under-construction',
    //       element: <MaintenanceUnderConstruction />
    //     },
    //     {
    //       path: 'coming-soon',
    //       element: <MaintenanceComingSoon />
    //     }
    //   ]
    // }
  ]
};

export default MainRoutes;
