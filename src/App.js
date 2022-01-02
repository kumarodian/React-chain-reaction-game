import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import "./css/style.css";
import "./css/styleBlue.css";
import "./css/styleGreen.css";
import Dashboard from "./Component/Dashboard";
import Board from "./Component/Board";
import LeaderBoard from "./Component/LeaderBoard";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="header">
          <NavLink exact activeClassName="active" to="/">
            Dashboard
          </NavLink>
          <NavLink activeClassName="active" to="/leaderboard">
            Leaderboard
          </NavLink>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/game" component={Board} />
            <Route exact path="/leaderboard" component={LeaderBoard}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
