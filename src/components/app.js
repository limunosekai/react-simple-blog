import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './main';

function app() {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
    </Switch>
  );
}

export default app;
