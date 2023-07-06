import { motion } from "framer-motion";
import './Transaction.css';


export default function TransactionItem({ month, index, accordionState, toggleAccordion, theme }) {

    return (
        <div key={index} className={`accordContainer ${theme === 'dark' ? 'dark' : 'light'}`}>

            <div className='accordHeader'>
                <h3>{month.month}</h3>
                <button onClick={() => toggleAccordion(index)}>
                    <span className="material-symbols-outlined"
                        style={{
                            transform: `rotate(${accordionState ? 180 : 0}deg)`,
                            transition: "all 0.25s",
                            color: theme === 'dark' ? 'white' : 'black'
                        }}>
                        expand_more
                    </span></button>
            </div>
            {accordionState && (
                <motion.div className='accordContent'
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .4 }}>
                    <div>
                        <h4 className='accordContentTitle'>Expenses:</h4>
                        <ul className='accordContentList'>
                            {month.expenses.map((expense, i) => (
                                <li key={i} >  {`${expense.category}:`}<span className={"expense"}> {`-${expense.amount}$`}</span></li>

                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className='accordContentTitle'>Incomes:</h4>
                        <ul className='accordContentList'>
                            {month.incomes.map((income, i) => (
                                <li key={i} >  {`${income.category}:`}<span className={"income"}> {`+${income.amount}$`}</span></li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            )}
        </div>
    )
}