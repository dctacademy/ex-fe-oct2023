export default function UsersList(props) {
    const handleRemoveAll = () => {
        props.removeAll()
    }
    
    return (
        <div>
            <h2>Lists users - {props.users.length}</h2>
            <ul>
                { props.users.map((ele) => {
                    return <li key={ele.id}> { ele.name } </li>
                })}
            </ul>
            <button onClick={handleRemoveAll}>remove all</button>
        </div>
    )
}

