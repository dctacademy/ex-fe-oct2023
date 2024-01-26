import { useState } from 'react'
import axios from 'axios'
export default function LoginForm(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')  
    const [formErrors, setFormErrors] = useState({})
    const [serverErrors, setServerErrors] = useState('') 
    
    const handleSubmit = (e) => {
        e.preventDefault()  
        const formData = {
            email,
            password 
        }
        axios.post('http://localhost:3050/api/users/login', formData)
            .then((response) => {
                const token = response.data.token 
                localStorage.setItem('token', token)
                alert('successfully logged in')
                props.loginSuccess()
            })
            .catch((err) => {
                setServerErrors(err.response.data.notice)
            })
    }
    
    return (
        <div>
            <h2>Login</h2>
            { serverErrors && <p style={{ color: 'red'}}>{ serverErrors }</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Enter Email</label> <br />
                <input 
                    type="text" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    id="email" 
                    name="email" 
                /> <br/>
                <label htmlFor="password">Enter Password</label> <br />
                <input 
                    type="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} id="password" 
                    name="password" 
                /> <br/>
                <input type="submit" /> 
            </form>
        </div>
    )
}