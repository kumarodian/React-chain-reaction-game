import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import "../css/style.css";
import "../css/styleBlue.css";
import "../css/styleGreen.css";
import Dashboard from "./Dashboard";
import Board from "./Board";
import LeaderBoard from "./LeaderBoard";
const TEAM = [
  { id: "1", unicode: "🐦", name: "Kookubura", score: 0 },
  { id: "2", unicode: "🐉", name: "Balerion", score: 0 },
  { id: "3", unicode: "🐋", name: "Orca", score: 0 },
  { id: "4", unicode: "🐈", name: "Life of Pie", score: 0 },
];

function ChainGame() {
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
            <Route
              exact
              path="/"
              render={(props) => <Dashboard team={TEAM} {...props} />}
            />
            <Route
              exact
              path="/game"
              render={(props) => <Board team={TEAM} {...props} />}
            />
            <Route exact path="/leaderboard" component={LeaderBoard}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default ChainGame;
