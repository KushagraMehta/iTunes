import NotFound from '@containers/NotFoundPage/Loadable';
import LandingPage from '@containers/LandingPage/Loadable';
export const routeConfig = {
  repos: {
    component: LandingPage
  },
  notFoundPage: {
    component: NotFound,
    route: '/'
  }
};
