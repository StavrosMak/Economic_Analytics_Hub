
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../App';
import data from '../../shared/data.json';
import TransactionItem from './TransactionItem';
import './Transaction.css';

export default function Transaction() {

    const { theme } = useContext(ThemeContext);
    const [accordionStates, setAccordionStates] = useState(Array(data.length).fill(false));

    const toggleAccordion = (index) => {
        setAccordionStates((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        })
    }
    return (
        <div className='Transaction'>
            <div className="TransactionHeader" style={{ color: theme === 'dark' ? 'white' : 'black' }}>
                <h3>Transaction History</h3>
            </div>
            {data.map((month, index) => (
                <TransactionItem key={index} month={month} index={index} accordionState={accordionStates[index]} toggleAccordion={toggleAccordion} theme={theme} />
            ))
            }
        </div >
    )
}