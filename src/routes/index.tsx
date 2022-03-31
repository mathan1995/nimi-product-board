import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Tasks from './Tasks/index.tsx'

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Tasks} />
      </Switch>
    </Router>
  );
}

export default Routes;