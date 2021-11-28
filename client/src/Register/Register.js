import React, {useState} from 'react'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import PasswordChecklist from "react-password-checklist"

import {auth} from '../firebase'

function Register() {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordAgain, setPasswordAgain] = useState("")
    const [isPasswordValid, setIsPasswordValid] = useState("")

    const register = async ()=>{
        if(!validateEmail(email)||!isPasswordValid) return
        try {
            createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                 console.log(userCredential.user)
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(()=>{
                    window.history.pushState({}, undefined, "/home");
                })
                
              })
        } catch (error) {
            console.log(error.message)
        }
    }
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    return (
        <div>
            <div>
                <h1>Register</h1>
                <input placeholder='Full Name' onChange={(e)=>setName(e.target.value)}/>
                <input placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
                <input placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
                <input placeholder='Enter Password Again' onChange={(e)=>setPasswordAgain(e.target.value)}/>
                <PasswordChecklist
				rules={["minLength","specialChar","number","capital","match"]}
				minLength={5}
				value={password}
				valueAgain={passwordAgain}
				onChange={(isValid) => {setIsPasswordValid(isValid)}}
			/>
                <button onClick={register} disabled={!validateEmail(email)||!isPasswordValid} >Register</button>
            </div>
        </div>
    )
}

export default Register
