import React, {useState} from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import PasswordChecklist from "react-password-checklist"

function Register() {

    const [email, setEmail] = useState("")
    const [email, setPassword] = useState("")

    const register = async ()=>{
        try {
            createUserWithEmailAndPassword()
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div>
            <div>
                <h1>Register</h1>
                <input placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
                <input placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
                <PasswordChecklist
				rules={["minLength","specialChar","number","capital","match"]}
				minLength={5}
				value={password}
				valueAgain={passwordAgain}
				onChange={(isValid) => {}}
			/>
                <button>Register</button>
            </div>
        </div>
    )
}

export default Register
