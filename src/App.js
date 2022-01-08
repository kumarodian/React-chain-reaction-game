import './App.css';
import './css/style.css';
import './css/styleBlue.css';
import './css/styleGreen.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Board from './Containers/Board';
import Dashboard from './Containers/Dashboard';
import Header from './Components/Header';
import LeaderBoard from './Containers/LeaderBoard';

function App() {
  return (
    <Router>
      <main>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/game" component={Board} />
            <Route exact path="/leaderboard" component={LeaderBoard}></Route>
          </Switch>
        </div>
        <div className="circle1" />
        <div className="circle2" />
      </main>
    </Router>
  );
}

export default App;
