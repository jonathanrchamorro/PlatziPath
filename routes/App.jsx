import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../src/pages/StyleGuide.scss'
import Home from '../src/pages/Home';
import NotFound from '../src/pages/NotFound';
import Layout from '../src/components/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
