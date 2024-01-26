import { useState, useEffect } from 'react' 
import axios from 'axios'
function Categories() {
    // console.log('component start')
    const [categories, setCategories] = useState([])
    const [name, setName] = useState('')

    const handleRemove = (obj) => {
        const confirmation = window.confirm(`Are you sure you want to remove ${obj.name}?`)
        if(confirmation) {

           axios.delete(`http://localhost:3050/api/categories/${obj._id}`)
            .then((response) => {
                const result = response.data 
                const newArr = categories.filter((ele) => {
                    return ele._id != result._id 
                })
                setCategories(newArr)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    const handleEdit = (obj) => {
        const input = window.prompt(`Update category name for ${obj.name}`) 
        if(input.trim()) {
            // const formData = Object.assign(obj, { name: input })
            const formData = {...obj, name: input }
            axios.put(`http://localhost:3050/api/categories/${obj._id}`, formData)
                .then((response) => {
                    const result = response.data 
                    const newArr = categories.map((ele) => {
                        if(ele._id == result._id) {
                            return result 
                        } else {
                            return ele 
                        }
                    })
                    setCategories(newArr)
                })
                .catch((err) => {
                    console.log(err) 
                })
        }
    }
    
    const handleSubmit = (e) => { 
        e.preventDefault() 
        const formData = {
            name: name 
        }

        axios.post('http://localhost:3050/api/categories', formData) 
            .then((response) => {
                const result = response.data 
                setCategories([...categories, result])
                setName('')
            })
            .catch((err) => {
                console.log(err) 
            })
   
    }

        // componentDidMount

        useEffect(() => {
            // console.log('component useEffect')
            axios.get('http://localhost:3050/api/categories')
                .then((response) => {
                    const result = response.data 
                    setCategories(result)
                })
                .catch((err) => {
                    alert(err.message)
                })
        },[])

    return (
        <div>
            {/* { console.log('component jsx')} */}
            { categories.length == 0 ? <p>No categories found. Add your first category</p> : (
                <div> 
                    <h2>Listing Categories - { categories.length } </h2> 
                    <ul>
                        { categories.map((category) => {
                            return <li key={category._id}>{ category.name }
                                <button onClick={() => {
                                    handleEdit(category)
                                }}>edit</button>

                                <button onClick={() => {
                                    handleRemove(category)
                                }}>remove</button>
                            </li>
                        })}
                    </ul>
                </div> 
            )}
            
            
            <h2>Add Category</h2> 
            <form onSubmit={handleSubmit}>
                <label>Enter name</label> <br />
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }}
                /><br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Categories


/*
    useEffect hook 

    Life Cycle of a Component

    Mounting - a component is rendered on the UI
    Updating - when state changes inside a component which results in rerender
    Unmounting - a component is removed from the UI

*/