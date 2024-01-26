import { useState } from 'react' 
import axios from 'axios'
import isEmpty from 'lodash/isEmpty'

const errorStyle = {
    color: 'red'
}

export default function ExpenseForm(props) {
    const [expenseDate, setExpenseDate] = useState('') 
    const [amount, setAmount] = useState('') 
    const [description, setDescription] = useState('') 
    const [categoryId, setCategoryId] = useState('')

    const [formErrors, setFormErrors] = useState({}) 
    const errors = {}

    const validateErrors = () => {
        if(expenseDate.trim().length === 0) {
            errors.expenseDate = 'Date is required'
        } else if(new Date(expenseDate) > new Date()) {
            errors.expenseDate = 'Date cannot be greater than today\'s date'
        }

        if(amount.trim().length === 0) {
            errors.amount = 'Amount is required'
        } 

        if(description.trim().length === 0) {
            errors.description = 'Description is required'
        }

        if(categoryId.trim().length === 0) {
            errors.categoryId = 'Category a required'
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        // es6 concise property
        const formData = {
            expenseDate,
            amount,
            description, 
            categoryId 
        }
        validateErrors() 

        if(isEmpty(errors)) {
            axios.post('http://localhost:3050/api/expenses', formData)
            .then((response) => {
                const result = response.data 
                props.addExpense(result)
                setFormErrors({})
                setExpenseDate('')
                setAmount('')
                setDescription('')
                setCategoryId('')
            })
            .catch((err) => {
                console.log(err.message) 
            })
        } else {
            setFormErrors(errors)
        }
    }
    
    return (
        <div>
            <h2>Add Expense</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="expDate">Expense Date</label> 
                <input 
                    type="date" 
                    value={expenseDate} 
                    onChange={(e) => { setExpenseDate(e.target.value) }}
                    id="expDate" 
                />
                { formErrors.expenseDate && <span style={errorStyle}>{ formErrors.expenseDate }</span>}
                <br /> 

                <label htmlFor="amount">Amount</label>
                <input 
                    type="number"
                    min="1"
                    value={amount}
                    onChange={(e) => { setAmount(e.target.value) }}
                    id="amount"
                /> 
                { formErrors.amount && <span style={errorStyle}>{ formErrors.amount }</span>}
                <br /> 

                <label htmlFor="category">Category</label> 
                <select 
                    value={categoryId} 
                    onChange={(e) => { setCategoryId(e.target.value)}} 
                    id="category"
                >
                    <option value="">Select Category</option>
                    { props.categories.map((cat) => {
                        return <option 
                                    key={cat._id}
                                    value={cat._id}
                                > { cat.name } </option>
                    })}
                </select> 
                { formErrors.categoryId && <span style={errorStyle}>{ formErrors.categoryId }</span>}
                <br/>

                <label htmlFor="description">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }}
                    id="description"
                >
                </textarea> 
                { formErrors.description && <span style={errorStyle}>{ formErrors.description }</span>}
                <br />

                <input type="submit" /> 
            </form>
        </div>
    )
}