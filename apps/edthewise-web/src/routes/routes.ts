import { beforeEnterCompeteHome, onEnterCompeteExamCard, onEnterCompeteExamResult, onEnterCompeteHome, onEnterCompeteList, onEnterLearnExamCard, onEnterLearnExamResult, onEnterLearnExamStarter, onEnterLearnHome, onEnterLearnList } from '@edthewise/application-routing-web';
import {
  browserHistory,
  createRouterState,
  HistoryAdapter,
  Route,
  RouterStore,
} from 'mobx-state-router';

const notFound = createRouterState('notFound');

export const routes: Route[] = [
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
    onEnter: onEnterLearnHome
  },
  {
    name: 'learnList',
    pattern: '/learn-list/:subject',
    onEnter: onEnterLearnList,
  },
  {
    name: 'learnExamStarter',
    pattern: '/learn-exam-starter/:id',
    onEnter: onEnterLearnExamStarter
  },
  {
    name: 'competeHome',
    pattern: '/compete-home',
    onEnter: onEnterCompeteHome,
    beforeEnter: beforeEnterCompeteHome
  },
  {
    name: 'competeList',
    pattern: '/compete-list/:subject',
    onEnter: onEnterCompeteList
  },
  {
    name: 'notFound',
    pattern: '/not-found',
  },
  {
    name: 'competeExamCard',
    pattern: '/compete-exam/:id',
    onEnter: onEnterCompeteExamCard
  },
  {
    name: 'learnExamCard',
    pattern: '/learn-exam/:id',
    onEnter: onEnterLearnExamCard
  }, 
  {
    name: 'learnExamResult',
    pattern: '/learn-exam-result/:id',
    onEnter: onEnterLearnExamResult
  },
  {
    name: 'competeExamResult',
    pattern: '/compete-exam-result/:id',
    onEnter: onEnterCompeteExamResult
  }
];

export function initRouter() {
  const routerStore = new RouterStore(routes, notFound);

  // Observe history changes
  const historyAdapter = new HistoryAdapter(routerStore, browserHistory);
  historyAdapter.observeRouterStateChanges();

  return routerStore;
}
