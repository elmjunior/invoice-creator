import HomeScreen from './Home';
import Settings from './Settings';
import CreateInvoice from './CreateInvoice';

export default [
  {
    component: HomeScreen,
    path: '/',
    routes: [
      {
        component: Settings,
        path: '/settings',
      },
      {
        component: CreateInvoice,
        path: '/create-invoice',
      },
    ],
  },
];
