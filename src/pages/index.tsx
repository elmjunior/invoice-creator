import HomeScreen from './Home';

import Dashboard from './Dashboard';

export default [
  {
    component: HomeScreen,
    exact: true,
    path: '/',
  },

  {
    component: Dashboard,
    name: 'Dashboard',
    path: '/dashboard',
  },
];
