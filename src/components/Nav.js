import React from 'react'
import "./Nav.css"
import AccountBoxIcon from '@material-ui/icons/AccountBox';

function Nav() {
    return (
        <div className="Nav">
            <div className="nav">
                <img src="/logo192.png" alt="Movieflixer" className="nav-logo" />
                <AccountBoxIcon className="nav-profile" />
            </div>
        </div>
    )
}

export default Nav
