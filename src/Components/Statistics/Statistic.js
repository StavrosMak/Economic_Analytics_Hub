
import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import { calculateSalary } from '../../shared/Calculations'
import data from '../../shared/data.json'
 import './Statistic.css'

const salaryResults = calculateSalary(data);

export default function Statistic() {
  const { theme } = useContext(ThemeContext);


  return (
    <div className={`Statistic ${theme === 'dark' ? 'dark' : 'light'}`}>

      <h3 className='StatisticHeader'>Statistics</h3>
      {/* main income/salary */}
      <div className='statistics_row'>
        <p>Maximum Main Salary: <span>{salaryResults.maxMainSalary}$</span></p>
        <p>Month: <span>{salaryResults.maxMainSalaryMonth}</span></p>

      </div>
      <div className='statistics_row'>
        <p>Minimum Main Salary:<span>{salaryResults.minMainSalary}$</span></p>
        <p>Month: <span>{salaryResults.minMainSalaryMonth}</span></p>

      </div>

      {/* extra incomes */}
      <div className='statistics_row'>
        <p>Maximum Extra Income: <span>{salaryResults.maxExtraSalary}$</span></p>
        <p>Month: <span>{salaryResults.maxExtraSalaryMonth}</span></p>

      </div>
      <div className='statistics_row'>
        <p>Minimum Extra Income:<span>{salaryResults.minExtraSalary}$</span></p>
        <p>Month: <span>{salaryResults.minExtraSalaryMonth}</span></p>

      </div>

    </div>
  )


}