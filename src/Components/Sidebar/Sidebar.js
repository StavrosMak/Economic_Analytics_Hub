import React, { useContext } from 'react';
import { SidebarContext } from '../../App';
import { motion } from 'framer-motion';
import './Sidebar.css'
import {Link} from "react-router-dom";
export default function Sidebar() {
    const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);

    const sidebarVariants = {
        open: {
            width: '300px',
            transition: {
                duration: 0.3,
                ease: 'easeOut'
            }
        },
        close: {
            width: '100px',
            transition: {
                duration: 0.3,
                ease: 'easeOut'
            }
        }
    };

    const sidebarContentVariants = {
        open: {
            x: 0,
            transition: {
                delay: 0.4,
                duration: 0.5,
                ease: 'easeOut'
            }
        },
        close: {
            x: '0%',
            transition: {
                duration: 0.5,
                ease: 'easeOut'
            }
        }
    };

    return (
        <motion.div className={`Sidebar ${isSidebarOpen ? 'open' : 'close'}`} variants={sidebarVariants} initial="close" animate={isSidebarOpen ? "open" : "close"}>
            <i className="arrowBtn fa-sharp fa-solid fa-play fa-rotate-270"></i>
            <motion.div className={`sidebarContent ${isSidebarOpen ? 'open' : 'close'}`} variants={sidebarContentVariants}>
                <div className='sidebarBtns'>
                    <Link to="/">
                        <button className='sidebarBtn' onClick={() => { if (isSidebarOpen) { toggleSidebar() } }}>
                            <i className="fa-sharp fa-solid fa-chart-line"></i>
                            <h3>DashBoard</h3>
                        </button>
                    </Link>
                    <Link to="/transaction">
                        <button className='sidebarBtn' onClick={() => { if (isSidebarOpen) { toggleSidebar() } }}>
                            <i className="fa-solid fa-clock-rotate-left"></i>
                            <h3>Transactions</h3>
                        </button>
                    </Link >
                </div>
            </motion.div>
        </motion.div>
    );
}
