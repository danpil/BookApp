import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Books, Book, NotFoundPage, Filter } from './../UI/components';
import Layout from './../UI/containers/Layout';

const createRoutes = () => {
  return (
    <Route path={'/'} component={Layout}>
      <IndexRoute component={Books} />
      <Route path="/book/:id" component={Book} />
      <Route path="/filter" component={Filter} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  );
};

const Routes = createRoutes();

export default Routes;
