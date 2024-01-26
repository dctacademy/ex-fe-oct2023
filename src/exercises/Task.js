import { useState } from 'react'
function RegisterForm(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username: username,
            password: password 
        }
        console.log(formData) 
    }
    return (
        <div>
            <h2>Register Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Enter username</label> <br /> 
                <input 
                    type="text"
                    value={username}
                    onChange={(e) => { setUsername(e.target.value) }}
                /> <br /> 

                <label>Enter password</label> <br /> 
                <input 
                    type="password"   
                    value={password}
                    onChange={(e) => { setPassword(e.target.value)}}
                /> <br /> 

                <input type="submit" /> 
            </form>
        </div>
    )
}

export default RegisterForm