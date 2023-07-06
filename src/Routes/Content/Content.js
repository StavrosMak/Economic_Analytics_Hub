
import AreaCharts from "../../Components/AreaChart/AreaChart"
import InfoCard from "../../Components/InfoCard/InfoCard"
import FilledAreaChart from "../../Components/FilledAreaChart/FilledAreaChart"
import Barchart from "../../Components/Barchart/BarChart"
import LastTransactions from '../../Components/LastTransactionsSection/LastTransactions'
import Statistic from '../../Components/Statistics/Statistic';
import { motion } from "framer-motion";
import {calculateTotals} from '../../shared/Calculations'
import data from '../../shared/data.json'
import './Content.css'

const totals = calculateTotals(data);

export default function Content() {
  
    const currentBalance = totals.TotalInc - totals.TotalExp < 0 ? 0 : (totals.TotalInc -totals.TotalExp);
    const averageMonthlyIncome=(totals.TotalInc/(data.length));
    return (

        <motion.div initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} className={`ContentContainer`}>

            <AreaCharts />
            <div className="infoCardList">
                <InfoCard iconClass="fa-wallet" value={`${currentBalance}$`} label="Current Balance" />
                <InfoCard iconClass="fas fa-money-check" value={`${totals.TotalInc}$`} label="Total Income" />
                <InfoCard iconClass="fas fa-money-bill-wave" value={`${totals.TotalExp}$`} label="Total Expenses" />
                <InfoCard iconClass="fas fa-hand-holding-usd" value={`${averageMonthlyIncome}$`} label="Average monthly income" />
            </div>
            <div className="categoryList">
                <FilledAreaChart title="Incomes & Expenses" dataKey="Total_Incomes" dataKey2="Total_Expenses" />
                <Barchart />
                <FilledAreaChart title="Monthly profit" dataKey="Profit" />

            </div>
            <div className="StatisticInfo">
                <LastTransactions lastMonth='Jul'/>
                <Statistic />
            </div>

        </motion.div>


    )


}