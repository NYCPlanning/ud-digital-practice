import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
  <div id='nav-column' className='flex flex-col space-y-4 items-start'>
    <section className='flex flex-col'>
      <Link activeClassName={'a-active'} to='/rhino/about'><h5>UDTools for Rhino</h5></Link>
      <Link activeClassName={'a-active'} to='/rhino/install'>Install</Link>
      <Link activeClassName={'a-active'} to='/rhino/getting-started'>Getting Started</Link>
    </section>
    <section className='flex flex-col'>
      <Link activeClassName={'a-active'} to='/digital-twin/about'><h5>NYC Digital Twin</h5></Link>
    </section>
    <section className='flex flex-col'>
      <h5>Learning Resources</h5>
      <Link activeClassName={'a-active'} to='/rhino/basics'>Rhino Basics</Link>
      <Link activeClassName={'a-active'} to='/rhino/grasshopper-basics'>Grasshopper Basics</Link>
      <Link activeClassName={'a-active'} to='/tutorials/rhino/module-1'>Tutorial: Introduction</Link>
      <Link activeClassName={'a-active'} to='/tutorials/rhino/module-2'>Tutorial: Buildings</Link>
      <Link activeClassName={'a-active'} to='/tutorials/rhino/module-3'>Tutorial: Neighborhoods</Link>
      <Link activeClassName={'a-active'} to='/tutorials/rhino/module-4'>Tutorial: Advanced</Link>
      <Link activeClassName={'a-active'} to='/reading-list'>Reading List</Link>
    </section>
    <section className='flex flex-col'>
      <h5>Working With Us</h5>
      <Link activeClassName={'a-active'} to='/collaborate/rwcds-checklist'>RWCDS Checklist</Link>
      <Link activeClassName={'a-active'} to='/collaborate/project-roles'>Project Roles</Link>
      <Link activeClassName={'a-active'} to='/collaborate/submit-an-issue'>Submit an Issue</Link>
    </section>
  </div>
)

export default Nav;