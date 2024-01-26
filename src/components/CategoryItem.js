import axios from 'axios'
import { url } from '../config'
export default function CategoryItem(props) {
    const handleRemove = () => {
        const confirmation = window.confirm("Are you sure?")
        if(confirmation) {
            axios.delete(`${url}/api/categories/${props.id}`)
            .then((response) => {
                const result = response.data 
                props.removeCategory(result._id)
            })
            .catch((err) => {
                alert(err.message)
            })
        }
    }
    return <li> { props.name }
        <button onClick={handleRemove}>remove</button>
     </li>
}