import HomeScreen from './Home';
import Settings from './Settings';
import CreateInvoice from './CreateInvoice';
import Invoice from './Invoice';

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
      {
        component: Invoice,
        path: '/invoices/:id',
      },
    ],
  },
];
