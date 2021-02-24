import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
  <div id='nav-column' className='flex flex-col items-start'>
    <h5>UDTools for Rhino</h5>
    <Link activeClassName={'a-active'} to='/plugin/about'>About</Link>
    <Link activeClassName={'a-active'} to='/plugin/install'>Install</Link>
    <Link activeClassName={'a-active'} to='/plugin/guide'>Guide</Link>

    <h5>NYC Digital Twin</h5>
    <Link activeClassName={'a-active'} to='/digital-twin/about'>About</Link>

    <h5>Learning Resources</h5>
    <Link activeClassName={'a-active'} to='/reading-list'>Reading List</Link>
    <Link activeClassName={'a-active'} to='/learning/rhino-basics'>Rhino Basics</Link>

    <h5>Working With Us</h5>
    <Link activeClassName={'a-active'} to='/collaborate/rwcds'>RWCDS Model Requirements</Link>
    <Link activeClassName={'a-active'} to='/collaborate/roles'>Project Roles</Link>
    <Link activeClassName={'a-active'} to='/collaborate/issues'>Submit an Issue</Link>

    {/* <Link activeClassName={'a-active'} to='/digital-twin/about'>Skill Share</Link> */}
  </div>
)

export default Nav;