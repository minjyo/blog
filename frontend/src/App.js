import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const MainPage = lazy(() => import('pages/MainPage'));
const PostPage = lazy(() => import('pages/PostPage'));
const SettingPage = lazy(() => import('pages/SettingPage'));
const WritePage = lazy(() => import('pages/WritePage'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route component={MainPage} path={('/@:username', '/')} exact></Route>
          <Route component={PostPage} path={'/:postId'} exact></Route>
          <Route component={WritePage} path={'/write'} exact></Route>
          <Route component={SettingPage} path={'/setting'} exact></Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
