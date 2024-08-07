import React, { useState } from 'react';
import './Admincomponent.css';
import './Header';
import './sidebar'
import Header from './Header';
import Sidebar from './sidebar';
import Settings from './setting';

function SettingsComponent() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
	return (
	     <div className="body_dash">
		 <div className='set-container'>
			{/*<Header OpenSidebar={OpenSidebar}/>*/}
			<Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
			<Settings/>
		</div>
		</div>
	);
}

export default SettingsComponent;
