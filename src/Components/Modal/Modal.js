import { useContext } from 'react';
import { ThemeContext } from '../../App';
import { motion } from "framer-motion";
import '../Modal/Modal.css'

export default function Modal({ isModalOpen, onClose }) {
    const { theme } = useContext(ThemeContext);
    if (!isModalOpen) return null;
    
    return (
        <motion.div className={`Modal ${theme === 'dark' ? 'darkModal' : 'lightModal'}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}>
            <i className={`ModalArrow 'fa-sharp fa-solid fa-play fa-rotate-270 ${theme === 'dark' ? 'darkModalArrow' : 'lightModalArrow'}`}></i>
            <h4>You are logged in.</h4>

        </motion.div >
    )

}