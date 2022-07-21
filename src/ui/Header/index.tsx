import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = { color: 'red' };

  return (
    <header>
      <ul>
        <li>
          <NavLink
            to='/'
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/login'
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
