import React from 'react';
import { Outlet ,Link} from 'react-router-dom';

export default function PageLayout() {
  return (
    <div  className='wrapper'>
        <div className='sidebar'>
            <h2>Sidebar</h2>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/topics'>Topics</Link></li>
            </ul>
        </div>
        <div className='main-content'>
            <div className='header'>Header</div>
            <div className='info'>
                <Outlet/>
            </div>

        </div>

    </div>
  )
}
