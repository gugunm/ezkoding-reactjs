import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div className='max-w-xl mx-auto'>
      <h1 className='text-2xl font-semibold pt-4 pb-2'>ToDo App!</h1>

      <nav className='mb-8'>
        <ul className='flex gap-4'>
          <li className='bg-indigo-600 px-4 py-1 rounded-md text-white'>
            <Link to='/'>Home</Link>
          </li>
          <li className='bg-indigo-600 px-4 py-1 rounded-md text-white'>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default Layout;
