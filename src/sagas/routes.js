import homeSaga from './home';

const routes = [
  {
    pattern: '/', handler: homeSaga,
  },
];

export default routes;
