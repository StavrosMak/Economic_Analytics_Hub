
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ThemeContext } from '../../App';
import React, { useContext } from 'react';
import data from '../../shared/data.json'
import './BarChart.css'


export default function Barchart() {
    const { theme } = useContext(ThemeContext);
    const categoryTotals = {};

    data.forEach(month => {
        month.expenses.forEach(expense => {
            if (categoryTotals[expense.category]) {
                categoryTotals[expense.category] += expense.amount;
            } else {
                categoryTotals[expense.category] = expense.amount;
            }
        });
    });

    const chartData = Object.keys(categoryTotals).map(category => ({
        category: category,
        totalExpenses: categoryTotals[category]
    }));

    
    return (
        <div className={`BarChart ${theme === 'dark' ? 'dark' : 'light'}`}>
            <h3 className='BarChartHeader'>Category Expenses</h3>
            <ResponsiveContainer width="99%" height="90%">
                <BarChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0, }} barSize={70} barCategoryGap={2}>
                    <defs>
                        <linearGradient id='color2' x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#1F8EF1" stopOpacity={0.4} ></stop>
                            <stop offset="35%" stopColor="#1F8EF1" stopOpacity={0.08} ></stop>
                            <stop offset="55%" stopColor="#1F8EF1" stopOpacity={0.05} ></stop>
                            <stop offset="85%" stopColor="#1F8EF1" stopOpacity={0.02} ></stop>
                        </linearGradient>
                    </defs>
                    <XAxis axisLine={false} tickLine={false} dataKey="category" scale="category" padding={{ left: 30, right: 40 }}
                        tickFormatter={(value) => {
                            const limit = 5;
                            if (value.length < limit) return value;
                            return `${value.substring(0, limit)}...`;
                        }}
                    />
                    <YAxis axisLine={false} tickLine={false} />
                    <CartesianGrid horizontal={false} vertical={false} opacity={0.2} />
                    <Tooltip content={CustomToolTip} />
                    <Bar dataKey="totalExpenses" stroke="#1F8EF1" strokeOpacity={.5} barCategoryGap={1} fill="url(#color2)" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );

}

const CustomToolTip = ({ active, payload, label }) => {

    if (active && payload && payload.length) {
        return (
            <div className='custom-tooltip'>
                <p className='label'>{`${label}: ${payload[0].value}$`}</p>

            </div>
        )
    }
}
