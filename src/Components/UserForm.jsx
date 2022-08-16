import React, {useState} from "react";



const Person = (props) =>{
    const [ firstName , setFirstName] = useState("");
    const [ firstNameError, settingError] = useState("");

    const [ lastName , setLastName] = useState("");
    const [ lastNameError, lastNameErrorPrompt] = useState("");

    const [email, setEmail] = useState("");
    const [ emailError, emailErrorPrompt] = useState("");


    const [password, setPassword] = useState("");


    const [confirmPassword, setConfirmPassword] = useState("");
    const [ confirmPasswordError, confirmPasswordErrorPrompt] = useState("");


    const firstNameChecker = (e) =>{
        setFirstName(e.target.value);
        if(e.target.value.length < 1){
            settingError("Wow more than one letter please")
        }else{
            settingError("")
        }
    }

    const lastNameChecker = (e) =>{
    setLastName(e.target.value);
    if(e.target.value.length < 1){
        lastNameErrorPrompt("More than one letter please")
    }else{
        lastNameErrorPrompt('')}
}
    const emailChecker = (e) =>{
        setEmail(e.target.value);
        if(e.target.value.length < 1){
            emailErrorPrompt("More than one letter please")
        }else if(e.target.value.length < 3){
            emailErrorPrompt("Email needs to be longer than 3 letters")
        }
        else{
            emailErrorPrompt('')}
    }

    const passwordAutho = (e) =>{
        setConfirmPassword(e.target.value);
        if(e.target.value !== password){
            confirmPasswordErrorPrompt("Passwords must match ")
        }
        else{
            confirmPasswordErrorPrompt("")
        }
    }


    const createPerson = (e) =>{
        e.preventDefault();
        const newPerson = {firstName,lastName,email,password,confirmPassword};
        console.log(newPerson)
    }


return(
    <form onSubmit={ createPerson }>
        <div>
            <label>First Name:</label>
            <input type="text" onChange={ firstNameChecker }></input>
            {
                firstNameError ? <p> { firstNameError }</p> :
                ''
            }
        </div>
        <div>
            <label>Last Name:</label>
            <input type="text" onChange={ lastNameChecker }></input>
            {
                lastNameError ? <p> { lastNameError }</p> :
                ''
            }
        </div>
        <div>
            <label>Email:</label>
            <input type="text" onChange={ emailChecker}></input>
            {
                emailError ? <p>{ emailError }</p>:
                ''
            }
        </div>
        <div>
            <label>Password:</label>
            <input type="text" onChange={ (e) => setPassword(e.target.value)}></input>
        </div>
        <div>
            <label> Confirm Password:</label>
            <input type="text" onChange={ passwordAutho }></input>
            {
                confirmPasswordError ? <p>{ confirmPasswordError }</p> :
                ''
            }
        </div>
        <input type="submit" value="Submit Son" />
    </form>
)

}

export default Person

