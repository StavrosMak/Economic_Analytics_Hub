import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../App';
import data from '../../shared/data.json'
import './LastTransactions.css'

export default function LastTransactions({lastMonth}) {
    const { theme } = useContext(ThemeContext);
    const [expenses, setExpenses] = useState([]);
    let month = lastMonth;
    const filterData = data.filter((data) => data.month === month);


    useEffect(() => {
        if (filterData.length > 0) {
            setExpenses(filterData[0].expenses);
        }
    }, [filterData]);
    return (

        <div className={`LastTransactions ${theme === 'dark' ? 'dark' : 'light'}`}>
            <h3>Monthly Expenses</h3>
            <div className='LastTransacitonsContent'>
                {expenses.map((expense,index) => (
                    <div key={index} className={`LastTransactionItem `}>
                        <p>{expense.category}:</p>
                        <p className='expense'>-{expense.amount} $</p>
                    </div>
                ))}
            </div>
        </div >
    )
} 