import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../src/styles/globals.scss';
import Home from '../src/pages/Home';
import Question from '../src/pages/Question';
import NotFound from '../src/pages/NotFound';
import Layout from '../src/components/Layout';


const App = () => (

  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/question' component={Question} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App;