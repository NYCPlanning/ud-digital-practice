import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
  <div id='nav-column' className='flex flex-col'>
    <h2>UDTools for Rhino</h2>
    <Link to='/plugin/about'>About</Link>
    <Link to='/plugin/install'>Install</Link>
    <Link to='/plugin/guide'>Guide</Link>

    <h2>NYC Digital Twin</h2>
    <Link to='/digital-twin/about'>About</Link>

    <h2>Learning Resources</h2>
    <Link to='/learning/rhino-basics'>Rhino Basics</Link>

    <h2>Working With Us</h2>
    <Link to='/collaborate/rwcds'>RWCDS Model Requirements</Link>
    <Link to='/collaborate/roles'>Project Roles</Link>
    <Link to='/collaborate/issues'>Submit an Issue</Link>
    {/* <Link to='/digital-twin/about'>Skill Share</Link> */}
  </div>
)

export default Nav;