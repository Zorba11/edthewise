import {
  browserHistory,
  createRouterState,
  HistoryAdapter,
  RouterState,
  RouterStore,
} from 'mobx-state-router';

const notFound = createRouterState('notFound');

export const routes = [
  {
    name: 'signUp',
    pattern: '/sign-up',
  },
    {
    name: 'signIn',
    pattern: '/sign-in',
  },
  {
    name: 'home',
    pattern: '/',
  },
  {
    name: 'learnHome',
    pattern: '/learn-home',
  },
  {
    name: 'competeHome',
    pattern: '/compete-home',
    onEnter: (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
      return Promise.resolve();
  }
  },
  {
    name: 'department',
    pattern: '/departments/:id',
  },
  {
    name: 'notFound',
    pattern: '/not-found',
  },
  {
    name: 'competeExamCard',
    pattern: '/compete-exam/:id',
  }
];

export function initRouter() {
  const routerStore = new RouterStore(routes, notFound);

  // Observe history changes
  const historyAdapter = new HistoryAdapter(routerStore, browserHistory);
  historyAdapter.observeRouterStateChanges();

  return routerStore;
}
