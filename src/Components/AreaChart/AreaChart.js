
import React, { useState, useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './AreaChart.css'
import { ThemeContext } from '../../App';
import data from '../../shared/data.json'
import { calculateMonthlyTotals } from '../../shared/Calculations';

const totals = calculateMonthlyTotals(data);

export default function AreaCharts() {
    const { theme } = useContext(ThemeContext);

    const [diagram, setDiagram] = useState("Total_Expenses");

    const [chartKey, setChartKey] = useState(0);
    const handleDiagramChange = (value) => {
        setDiagram(value);
        setChartKey(chartKey + 1);
    };

    return (
        <div className={`AreaChartContainer ${theme === 'dark' ? 'dark' : 'light'}`}>
            <div className='AreaChartHeader'>
                <h3>Overview</h3>
                <div className='selectData'>
                    <button onClick={() => handleDiagramChange("Total_Expenses")} className={diagram === "Total_Expenses" ? "Active" : ""}>
                        Expenses
                    </button>
                    <button onClick={() => handleDiagramChange("Total_Incomes")} className={diagram === "Total_Incomes" ? "Active" : ""}>
                        Incomes
                    </button>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart key={chartKey} width={500} height={300} data={totals} margin={{ top: 5, right: 30, left: 20, bottom: 5, }}>
                    <CartesianGrid horizontal={false} opacity={0.2} stroke='#D346B1' />
                    <YAxis tickCount={6} axisLine={false} tickLine={false} tickFormatter={money => `$ ${money}`} />
                    <XAxis axisLine={false} tickLine={false} dataKey="month" />
                    <Tooltip content={CustomToolTip} />   
                    <Line type="monotone" dot={{ fill: '#D346B1' }} dataKey={diagram} strokeWidth="2px" stroke="#D346B1" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
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
