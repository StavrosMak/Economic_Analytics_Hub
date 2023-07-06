
const MAX_SALARY = Number.MAX_SAFE_INTEGER;

function calculateSalary(data) {
    let maxMainSalary = 0;
    let maxMainSalaryMonth = '';

    let minMainSalary = MAX_SALARY;
    let minMainSalaryMonth = '';

    let maxExtraSalary = 0;
    let maxExtraSalaryMonth = 0;

    let minExtraSalary = MAX_SALARY;
    let minExtraSalaryMonth = '';

    data.forEach(monthData => {
        monthData.incomes.forEach(incomeData => {
            if (incomeData.category === 'Salary') { //Main salary
                if (incomeData.amount > maxMainSalary) {
                    maxMainSalary = incomeData.amount;
                    maxMainSalaryMonth = monthData.month;
                }
                if (incomeData.amount < minMainSalary) {
                    minMainSalary = incomeData.amount;
                    minMainSalaryMonth = monthData.month;
                }
            }
            else { //Extra incomes
                if (incomeData.amount > maxExtraSalary) {
                    maxExtraSalary = incomeData.amount;
                    maxExtraSalaryMonth = monthData.month;
                }
                if (incomeData.amount < minExtraSalary) {
                    minExtraSalary = incomeData.amount;
                    minExtraSalaryMonth = monthData.month;
                }
            }
        }
        );
    });

    return {
        maxMainSalary, maxMainSalaryMonth,
        minMainSalary, minMainSalaryMonth,
        maxExtraSalary, maxExtraSalaryMonth,
        minExtraSalary, minExtraSalaryMonth
    };
}

function calculateTotals(data) {
    const result = data.reduce((acc, curr) => {
        acc.TotalIncomes += curr.incomes.reduce((sum, { amount }) => sum + amount, 0);
        acc.TotalExpenses += curr.expenses.reduce((sum, { amount }) => sum + amount, 0);
        return acc;
    }, { TotalIncomes: 0, TotalExpenses: 0 });

    return { TotalInc: result.TotalIncomes, TotalExp: result.TotalExpenses };
}

export { calculateSalary, calculateTotals };



function calculateMonthlyTotals(data) {
    const result = data.map(month => {
        const Total_Incomes = month.incomes.reduce((acc, curr) => acc + curr.amount, 0);
        const Total_Expenses = month.expenses.reduce((acc, curr) => acc + curr.amount, 0);
        const Profit = Total_Incomes - Total_Expenses;
        return {
            month: month.month,
            Total_Incomes: Total_Incomes,
            Total_Expenses: Total_Expenses,
            Profit: Profit
        }

    });
    return result;
}

export { calculateMonthlyTotals };


 