import React from 'react';
import "./Sidebar.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <h3>First Channel</h3>
                <ExpandMoreIcon />
            </div>
        </div>
    )
}

export default Sidebar