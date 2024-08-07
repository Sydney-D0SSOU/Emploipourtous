import React, { useState } from 'react';
import './Admincomponent.css';
import './Header';
import './sidebar'
import Header from './Header';
import Sidebar from './sidebar';
import Home from './Home';

function AdminComponent() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
	return (
	     <div className="body_dash">
		 <div className='grid-container'>
			<Header OpenSidebar={OpenSidebar}/>
			<Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
			<Home/>
		</div>
		</div>
	);
}

export default AdminComponent;
