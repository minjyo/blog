import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const MainPage = lazy(() => import('pages/MainPage'));
const PostPage = lazy(() => import('pages/PostPage'));
const WritePage = lazy(() => import('pages/WritePage'));

const App = () => {
  return (
    <>
      <Helmet>
        <title>blog</title>
      </Helmet>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              component={MainPage}
              path={('/@:username', '/')}
              exact
            ></Route>
            <Route component={WritePage} path={'/write'}></Route>
            <Route component={PostPage} path={'/:postId'}></Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
