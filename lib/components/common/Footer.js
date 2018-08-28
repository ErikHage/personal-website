import React from 'react';
import { Link } from 'react-router';

import { urls } from '../../helpers/constants'

const EllipsesDivider = () => ({
  render: () => {
    return (
      <span>
        {" "}
        <i className="fas fa-ellipsis-h fa-2x"/>
        {" "}
      </span>
    );
  }
});

class Footer extends React.Component {
  render() {
    return (
      <div id="page-footer">
        <hr />
        <span>
          <a href={urls.GITHUB} target="_blank"><i className="fab fa-github fa-2x" /></a>
        </span>
        <EllipsesDivider />
        <span>
           <a href={urls.LINKED_IN} target="_blank"><i className="fab fa-linkedin fa-2x" /></a>
        </span>
        <EllipsesDivider />
        <Link to="/contact">
          <i className="far fa-comment fa-2x" />
        </Link>
      </div>
    );
  }
}

export default Footer;
