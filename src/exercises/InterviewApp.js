import { useState, useEffect } from 'react' 
import UsersList from "./UsersList"
import axios from 'axios'
import UserForm from "./UserForm"
export default function App(){
    const [users, setUsers] = useState([])
  
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const result = response.data 
                setUsers(result) 
            })
            .catch((err) => {
                console.log(err) 
            })
    }, [])

    const removeAll = () => {
        setUsers([])
    }

    return (
        <div>
            <h1>App</h1>
            <UsersList 
                users={users} 
                removeAll={removeAll}
            />
            <UserForm /> 
        </div>
    )
}

