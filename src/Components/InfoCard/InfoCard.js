import './InfoCard.css'
import React, { useContext} from 'react';
import { ThemeContext } from '../../App';
export default function InfoCard({ iconClass, value, label }) {

    const { theme} = useContext(ThemeContext);

    return (
        <div className={`InfoCard ${theme === 'dark' ? 'dark' : 'light'}`}>
            <div className="infoCard-row1">
                <div className="infoCardIcon">
                    <i className={`fa-solid ${iconClass}`}></i>
                </div>
                <div className="infoCardText">
                    <p>{value}</p>
                </div>
            </div>
            <div className="infoCard-row2">
                <p>{label}</p>
            </div>
        </div>
    );
}
