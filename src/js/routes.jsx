import React from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { Header } from './common/components/Header';
import HomeRouteHandler from './views/home';
import QuizRouteHandler from './views/quiz';
import TrackingRouteHandler from './views/tracking';

import '../assets/fonts/fonts.css';

const JustAnotherPage = () => (
  <div>
    <h2>This is Just Another Page</h2>
    <p>Please remove this from your route, it is just to show case basic setup for router.</p>
  </div>
);

const HeaderWithRouter = withRouter(props => <Header {...props} />);

module.exports = (
  <div className="container">
    <HeaderWithRouter />
    <hr />
    <div className="container__content">
      <Switch>
        <Route exact path="/" component={HomeRouteHandler} />
        <Route path="/page" component={JustAnotherPage} />
        <Route path="/quiz/take/:id" component={QuizRouteHandler} />
        <Route path="/quiz/results/:id" component={QuizRouteHandler} />
        <Route path="/tracking" component={TrackingRouteHandler} />
        <Route path="*" component={HomeRouteHandler} />
      </Switch>
    </div>
  </div>
);
