import "./SideBar.css"

import React from 'react'
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import SidebarOption from "./SidebarOption";
function SideBar() {

    return (
        <div className="sidebar">
           <div className="sidebar_header">
               <div className="sidebar_info">
               <h2>Hydro Innovation</h2>
               <h3>
          
<FiberManualRecordIcon/>
Lahiru Wijesooriya
               </h3>
               </div>

              <CreateIcon/>
               </div> 
               <SidebarOption Icon={InsertCommentIcon} title ="Threads"/>

        </div>
    )
}

export default SideBar;