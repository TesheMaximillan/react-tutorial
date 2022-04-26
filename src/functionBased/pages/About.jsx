import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/about/about-app">About App</Link>
        </li>
        <li>
          <Link to="/about/about-author">About Author</Link>
        </li>
      </ul>
    </div>
  );
}
export default About;
