import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/skills" activeClassName="active">Skills</Link>
      {" | "}
      <Link to="/projects" activeClassName="active">Projects</Link>
      {" | "}
      <Link to="/hobbies" activeClassName="active">Hobbies</Link>
    </nav>
  );
};

export default Header;
