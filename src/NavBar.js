import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const views = [
    {
      id: 1,
      text: 'Home',
      path: '/',
    },
    {
      id: 2,
      text: 'Details',
      path: '/Details',
    },
    {
      id: 3,
      text: 'Industry',
      path: '/Industry',
    },
  ];

  return (
    <nav>
      <ul>
        {views.map((view) => (
          <li key={view.id}>
            <NavLink
              activeclassname="active-link"
              to={view.path}
            >
              {view.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
