import React from 'react'
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AcessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HealpOutLineIcon from "@material-ui/icons/Help";

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                {/* Avatatr for login users */}
                {/* time icon */}
                <Avatar
                className ="header_avatar"
                // alt ={user?.displayName}
                // src ={user?.photoURL}
                />
                <AcessTimeIcon/>
            </div>
            <div className="div header_search">
                {/* serch icon */}
                <SearchIcon/>
                {/* input */}
                <input placeholder ="Look for new  boot"/>
            </div>
            <div className="headr_right">
                {/* help icon */}
                <HealpOutLineIcon/>

            </div>
        </div>
    )
}

export default Header
