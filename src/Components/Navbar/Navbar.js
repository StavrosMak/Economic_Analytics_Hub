import './Navbar.css'
import React, { useContext, useState } from 'react';
import { ThemeContext, SidebarContext } from '../../App';
import Switch from '@mui/material/Switch';
import Modal from '../Modal/Modal';
import { useLovelySwitchStyles } from '@mui-treasury/styles/switch/lovely';
export default function Navbar() {


    const lovelyStyles = useLovelySwitchStyles();
    const { theme, toggleTheme } = useContext(ThemeContext);

    const { toggleSidebar } = useContext(SidebarContext);

    const [isModalOpen, setModal] = useState(false);


    const handleLogin = () => {
        setModal((prevIsModalOpen) => !prevIsModalOpen);
    }

    return (
        <div className={`Navbar  ${theme === 'dark' ? 'darkNav' : 'lightNav'}`}>
            <button className='menuBtn' onClick={toggleSidebar} style={{ color: theme === 'dark' ? '#fff' : '#000' }}>
                <i className="fa-solid fa-bars"></i>
            </button>
            <div className="rightSideNavbar">
                <Switch classes={lovelyStyles} onChange={toggleTheme} />
                <button onClick={handleLogin} className="Login"><i className="fa-regular fa-user"></i></button>
                <Modal isModalOpen={isModalOpen} onClose={() => setModal(false)} />
            </div>

        </div>


    )
}