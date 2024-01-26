import { useState } from 'react' 
export default function DynamicSelect() {
    const alphabets = ['a','b','c']
    const names = ['adam', 'adi', 'bala','chetan','charan','bhargav']
    const [selectedAlpha, setSelectedAlpha] = useState('')
    const [selectedName, setSelectedName] = useState('') 
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitted(true)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select value={selectedAlpha} onChange={e => setSelectedAlpha(e.target.value)}> 
                    <option value="">Select Alphabet</option>
                    { alphabets.map((ele, i) => {
                        return <option key={i} value={ele}> { ele } </option>
                    })}
                </select> <br /> 

                <select disabled={!selectedAlpha} value={selectedName} onChange={e => setSelectedName(e.target.value)}> 
                    <option value="">Select Name</option>
                    { names.filter((ele) => {
                        return ele.charAt(0).toLowerCase().startsWith(selectedAlpha.toLowerCase())
                     }).map((ele, i) => {
                        return <option key={i} value={ele}> { ele } </option>
                    })}
                </select>

                <input type="submit" /> 
            </form>

            { isSubmitted && <p>You have selected { selectedName }</p>}
        </div>
    )
}