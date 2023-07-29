import React from 'react';
import { useRouterStore } from 'mobx-state-router';

import { Header } from '@edthewise/shared-ui-components';

export const HomePage = () => {
  const routerStore = useRouterStore();

  const handleClick = () => {
    routerStore.goTo('department', {
      params: { id: 'electronics' },
    });
  };

  return (
    <div>
      <Header />
      <h1>Home</h1>
      <button onClick={handleClick}>Go to Electronics</button>
    </div>
  );
};
