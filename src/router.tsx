import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import { RootLayout } from './routes/root-layout';
import { ServerManagementPage } from './routes/server-management';
import { CupManagementsPage } from './routes/cup-managements';
import { BetsManagementsPage } from './routes/bets-managements';

const rootRoute = createRootRoute({
  component: RootLayout,
});

const serverManagementRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: ServerManagementPage,
});

const cupManagementsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cup-managements',
  component: CupManagementsPage,
});

const betsManagementsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/bets-managements',
  component: BetsManagementsPage,
});

const routeTree = rootRoute.addChildren([
  serverManagementRoute,
  cupManagementsRoute,
  betsManagementsRoute,
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
