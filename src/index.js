// es6 module loader
import React from 'react' 
import ReactDOM  from 'react-dom/client'
import App from './App'
// import DynamicSelect from './exercises/Dynamic-Select'
// import InterviewApp from './exercises/InterviewApp'
const root = ReactDOM.createRoot(document.getElementById('root')) 
root.render(<App />)


// useState, useEffect, useReducer, useContext, useMemo, useCallback

// function App() {
//     const [count, setCount] = useState(0) 
    
//     const handleUp = () => {
//         setCount(count + 1)
//     }

//     const handleDown = () => {
//         setCount(count - 1)
//     } 

//     const handleReset = () => {
//         setCount(0)
//     } 
    
//     return (
//         <div>
//             <h2>Counter -  { count } </h2>
//             <button onClick={handleUp}>+1</button>
//             <button onClick={handleDown} disabled={count == 0}>-1</button>
//             <button onClick={handleReset}>reset</button>
//             <p>The count value is { count } </p>
//         </div>
//     )
// }

// root.render(<App />)
// Component - function
// logic and also UI
// jsx - javascript xml (html like code)
// function App() {
//     const categories = [
//         { _id: 'dct123', name: 'Food'},
//         { _id: 'dct124', name: 'Travel'},
//     ]

//     const users = [
//         { _id: 1, name: 'John', email: 'j@gmail.com'}, 
//         { _id: 2, name: 'Mark', email: 'm@gmail.com'}
//     ]

//     const seasons = ['summer', 'winter', 'monsoon', 'rainy']

//     const words = ['javascript', 'react', 'node']

//     const handleClick = () => {
//         alert(`Total Categories - ${categories.length}`)
//     }

//     const handleView = (obj) => {
//         alert('you selected ' + obj._id + ' ' + obj.name  )
//     }

//     const handleShow = (name) => {
//         const vowels = 'aeiou' 
//         let count = 0
//         for(let i = 0; i < name.length; i++) {
//             if(vowels.includes(name[i])) {
//                 count++ 
//             }
//         }
//         alert(count) 
//     }

//    return (
//     <div>
//         <h1>Expense App</h1>
//         <h2>Listing Categories</h2>
//         <button onClick={handleClick} >show count</button>
//         <ul>
//             {
//                categories.map((ele) => {
//                 return  <li key={ele._id}> { ele.name } <button onClick={() => {
//                     handleView(ele)
//                 }}>view</button> </li>
//                }) 
//             }
//         </ul>

//         <h2>Listing users - { users.length } </h2>
//         <ul>
//             { users.map((ele) => {
//                 return <li key={ele._id}> { ele.name } </li>
//             })}
//         </ul>


//         <h2>Listings Seasons</h2>
//         <ul>
//             { seasons.map((ele, i) => {
//                 return <li key={i}> { ele } <button onClick={(e) => {
//                     handleShow(ele)
//                 }}>show</button> </li>
//             })}
//         </ul>    

//         { words.map((tech,i) => {
//             return (
//                 <div key={i}>
//                     <h2>{ tech }</h2>
//                     <ul>
//                         { tech.split('').map((char, i) => {
//                             return <li key={i}> { char.toUpperCase()} </li> 
//                         })}
//                     </ul>
//                 </div> 
//             )
//         })}
            
//     </div>
//    )
// }


// root.render(<App />)


// common js module loader 
// const React = require('react')


/*
    html 
    <a href="http://www.google.com" target="_blank"> Visit google </a>
*/

/*

const arr = [ 10, 11, 12, 13, 14 ]
console.log(arr.allEvens()) // [ 10, 12, 14 ]


Array.prototype.allEvens = function(){
    return this.filter(ele => ele % 2 == 0)
}

*/

/*

    'experience.min' : {

    },
    'experience.max' : {
        
    }

    A - Exception
    B - Above Average
    C - Average
    D - Below Average 
    E - Poor

*/

/* 
    class component 
  
    function component 
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

*/ 