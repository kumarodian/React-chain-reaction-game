import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header container">
      <NavLink exact activeClassName="active" to="/">
        Dashboard
      </NavLink>
      <NavLink activeClassName="active" to="/leaderboard">
        Leaderboard
      </NavLink>
    </div>
  );
};

export default Header;
