import ExpenseItem from "./ExpenseItem"
export default function ExpensesTable(props) {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { props.expenses.map((ele) => {
                    return (
                        <ExpenseItem 
                            key={ele._id}
                            expense={ele}
                            categories={props.categories}
                            removeExpense={props.removeExpense}
                        />
                    )
                })}
            </tbody>
        </table>
    )
}