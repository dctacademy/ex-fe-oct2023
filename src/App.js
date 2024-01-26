import { useState, useEffect } from 'react'
// import { appName, url } from './config'
import CategoriesContainer from './components/CategoriesContainer'
import ExpensesContainer from './components/ExpensesContainer'
import LoginForm from './components/LoginForm'
import axios from 'axios'

function App () {
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    const [categories, setCategories] = useState([])
    const [expenses, setExpenses] = useState([])

    const addCategory = (category) => {
        setCategories([...categories, category])
    }

    const removeCategory = (id) => {
        const newArr = categories.filter((ele) => {
            return ele._id != id 
        })
        setCategories(newArr) 
    }

    const addExpense = (expense) => {
        setExpenses([...expenses, expense])
    }

    const removeExpense = (id) => {
        const newArr = expenses.filter((ele) => {
            return ele._id != id 
        })
        setExpenses(newArr)
    }

    const loginSuccess = () => {
        setUserLoggedIn(true) 
    }

    const logoutUser = () => {
        setUserLoggedIn(false)
    }

    return (
        <div>
            <h1>Expense App</h1>
            { userLoggedIn ? (
                <div>
                    <button onClick={logoutUser}>Logout</button>
                    <CategoriesContainer 
                        categories={categories} 
                        addCategory={addCategory}   
                        removeCategory={removeCategory} 
                    />

                    <ExpensesContainer 
                        expenses={expenses}
                        categories={categories}
                        addExpense={addExpense}
                        removeExpense={removeExpense}
                    />
                </div> 
            ) : (
                <div>
                   <LoginForm loginSuccess={loginSuccess} />
                </div> 
            )}
    
        </div>
    )
}

export default App 



// import Categories from './Categories'
// import Todos from './S1A1'
// import ContactForm from './exercises/Contact'
// import { useState } from 'react' 

// function App() {

//     return (
//         <div>
//             <h1>Expense App</h1>
//             <Categories />
           
//         </div>
//     )
// }

// export default App 

// import { useState } from 'react'

// function A() {
//     const [msg, setMsg] = useState('this is a secret message')

//     const changeText = (txt) => {
//         setMsg(txt)
//     }

//     return (
//         <div>
//             <h1>Component A</h1>
//             <B text={msg} changeText={changeText} />
//             <C text={msg} />
//         </div>
//     )
// }

// function B(props) {
//     console.log(props)

//     const handleTransform = () => {
//         const input = prompt("Enter new text")
//         props.changeText(input)
//     }
    
//     return (
//         <div>
//             <h1>Component B</h1>
//             <p> {props.text} </p>
//             <button onClick={handleTransform}>transform</button>
//         </div>
//     )
// }

// function C(props) {
//     return (
//         <div>
//             <h2>Component C</h2>
//             <p> {props.text} </p>
//         </div>
//     )
// }




// export default A

// function Counter(){
//     const [count,setCount] = useState(0)

//     const changeCount = () => {
//         setCount(count + 1)
//     }

//     return (
//         <div>
//             <Display count={count} /> 
//             <Buttons changeCount={changeCount} /> 
//         </div>
//     )
// }

// function Display(props) {
//     return (
//         <div>
//             <h1> { props.count }  </h1> 
//         </div>
//     )
// }

// function Buttons(props){ 
//     return (
//         <div>
//             <button onClick={() => { props.changeCount()}}>+ 1</button>
//         </div>
//     )
// }

// export default Counter


