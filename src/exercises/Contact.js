import { useState } from 'react' 
function ContactForm(){
    const [name, setName] = useState('') 
    const [mobile, setMobile] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault() 
        const formData = {
            name: name,
            mobile: mobile,
            message: message
        }
        console.log(formData)
        setIsSubmitted(true)
    }

    return (
        <div>
            <h2>Contact Form</h2>
            { isSubmitted ? <p> Thank you {name} for submitting the form. We'll contact you shortly  </p> : (
                <form onSubmit={handleSubmit}>
                    <label>Enter your name</label> <br /> 
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => { 
                            setName(e.target.value)
                        }}
                    /> <br /> 

                    <label>Enter your mobile</label> <br /> 
                    <input 
                        type="text" 
                        value={mobile} 
                        onChange={(e) => { setMobile(e.target.value)}} 
                    /> <br /> 
                    <label>Enter Message</label> <br /> 
                    <textarea
                        value={message} 
                        onChange={(e) => { setMessage(e.target.value) }}
                    ></textarea><br /> 

                    <input type="submit" /> 
                </form>
            )}
        </div>
    )
}

export default ContactForm