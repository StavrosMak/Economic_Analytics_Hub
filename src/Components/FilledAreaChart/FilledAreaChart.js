import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ThemeContext } from '../../App';
import { calculateMonthlyTotals } from '../../shared/Calculations';
import React, { useContext } from 'react';
import './FilledAreaChart.css'
import data from '../../shared/data.json'


const totals = calculateMonthlyTotals(data);

export default function FilledAreaChart({ title, dataKey, dataKey2 }) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`FilledAreaChart ${theme === 'dark' ? 'dark' : 'light'}`}>
            <h3 className='FilledAreaChartHeader'>{title}</h3>
            <ResponsiveContainer width="100%" height="90%">
                <AreaChart height={250} data={totals} margin={{top: 10,right: 30,left: 0,bottom: 0,}}>
                    <defs>
                        <linearGradient id='color' x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#D346B1" stopOpacity={0.4} ></stop>
                            <stop offset="75%" stopColor="#D346B1" stopOpacity={0.05} ></stop>
                        </linearGradient>

                        <linearGradient id='color2' x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#1F8EF1" stopOpacity={0.4} ></stop>
                            <stop offset="75%" stopColor="#1F8EF1" stopOpacity={0.05} ></stop>
                        </linearGradient>
                    </defs>
                    <CartesianGrid horizontal={false} opacity={0.2} stroke='#D346B1' />
                    <YAxis axisLine={false} tickLine={false} tickFormatter={money => `$ ${money}`} />
                    <XAxis axisLine={false} tickLine={false} dataKey="month" />
                    <Tooltip content={CustomToolTip} />
                    <Area dot={{ fill: '#D346B1' }} fill="url(#color)" type="monotone" dataKey={dataKey} stroke="#D44FD7" />
                    <Area dot={{ fill: '#1F8EF1' }} fill="url(#color2)" type="monotone" dataKey={dataKey2} stroke="#1F8EF1" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}


const CustomToolTip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className='custom-tooltip'>
                {payload.map((item) => (
                    <p key={item.dataKey} className="value">{`${item.dataKey}: ${item.value}$`}</p>
                ))}
            </div>
        )
    }
}

