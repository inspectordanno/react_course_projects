import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
  <div>
    <h1>My work</h1>
    <p>Check out the work I've done</p>
    <Link to="/portfolio/1">Item One</Link>
    <Link to="/portfolio/2">Item Two</Link>
    <Link to="/portfolio/3">Item Three</Link>
  </div>
);

export default PortfolioPage;