import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PostIndex from './postsIndex';
import PostNew from './postNew';

function app() {
  return (
    <Switch>
      <Route exact path='/' component={PostIndex} />
      <Route exact path='/posts/new' component={PostNew} />
    </Switch>
  );
}

export default app;
