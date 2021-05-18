import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PostIndex from './postsIndex';
import PostNew from './postNew';
import PostShow from './postShow';

function app() {
  return (
    <Switch>
      <Route exact path='/' component={PostIndex} />
      <Route exact path='/posts/new' component={PostNew} />
      <Route exact path='/posts/:id' component={PostShow} />
    </Switch>
  );
}

export default app;
