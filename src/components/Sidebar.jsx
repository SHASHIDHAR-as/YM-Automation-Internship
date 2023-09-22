import React, { useState } from 'react';
import {
    FaTh,
    FaBars
}from "react-icons/fa";
import LogoutIcon from '@mui/icons-material/Logout';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import { NavLink } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ApprovalIcon from '@mui/icons-material/Approval';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TaskIcon from '@mui/icons-material/Task';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/attendence",
            name:"Attendence",
            icon:<AssignmentIcon/>
        },
        {
            path:"/timesheet",
            name:"Time Sheet",
            icon:<ViewTimelineIcon/>
        },
        {
            path:"/project",
            name:"Project / Task",
            icon:<TaskIcon/>
        },
        {
            path:"/approval",
            name:"Approval",
            icon:<ApprovalIcon/>
        },
        {
            path:"/payroll",
            name:"Payroll",
            icon:<AccountBalanceWalletIcon/>
        },
        {
            path:"/profilesetting",
            name:"Profile Setting",
            icon:<ManageAccountsIcon/>
        },
        {
            path:"/logout",
            name:"Logout",
            icon:<LogoutIcon/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
               <div className="top_section">
                   
                   <div style={{marginLeft: isOpen ? "3px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div style={{color:'yellow'}} className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none",color:'yellow'}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               
           </div>
           
           <main>{children}</main>
           
        </div>
    );
};

export default Sidebar;