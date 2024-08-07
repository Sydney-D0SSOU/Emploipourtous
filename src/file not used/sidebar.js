import React from "react";
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillGearFill} from 'react-icons/bs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Sidebar({openSidebarToggle, OpenSidebar}) {
	
	const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem('token');
     navigate('/');
  };

    return (
         <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className="sidebar-title">
            <div className="sidebar-brand">
                <BsCart3 className="icon_header" /> NavBar
            </div>
            <span className="icon close_icon" onClick={OpenSidebar}>x</span>
            </div>
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <a href="/AdminAccueil"> <BsGrid1X2Fill className="icon"/> Dashbooard</a>
                </li>
                <li className="sidebar-list-item">
                    <a href="/Add_Admin"> <BsFillArchiveFill className="icon"/> Add Admin</a>
                </li>
                <li className="sidebar-list-item">
                    <a href=""> <BsFillGrid3X3GapFill className="icon"/>Categories</a>
                </li>
                <li className="sidebar-list-item">
                    <a href="/AdminDashboard"> <BsPeopleFill className="icon"/> Users</a>
                </li>
                <li className="sidebar-list-item">
                    <a href="/settings"> <BsFillGearFill className="icon"/> Settings</a>
                </li>
                <li className="sidebar-list-item">
                 <button onClick={handleLogout} >  <FontAwesomeIcon icon={faSignOutAlt} /> 
						Logout
					  </button>
				  </li>
            </ul>
         </aside>
    );
}

export default Sidebar;
