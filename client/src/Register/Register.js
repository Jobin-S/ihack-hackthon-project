import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import PasswordChecklist from "react-password-checklist";
import Navbar from '../components/Navbar'
import { auth } from "../firebase";
import "./register.css";
function Register() {
  // useEffect(() => {
  //     if(!auth.currentUser){
  //         window.location.href ='/'
  //     }
  // }, [])

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState("");
  const [entringPassword, setEntringPassword] = useState(false);

  const register = async () => {
    if (!validateEmail(email) || !isPasswordValid) return;
    try {
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          console.log(userCredential.user);
          updateProfile(auth.currentUser, {
            displayName: name,
          }).then(() => {
            window.location.href = "/";
          });
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  return (
    <div>
<Navbar />
    
    <div className="container">
      <div id="main_quote-div">
        <h1>
          Join Us And
          <br /> The World Will <br />
          Be <span className="color_green">Cleaner.</span>{" "}
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. At fames
          faucibus gravida ac viverra.
        </p>
      </div>
      <div className="form-container">
        <p>Name</p>
        <input
          className="name_input"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <p>Email</p>
        <input
          className="email_input"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Password</p>
        <input
          className="password_input"
          placeholder="Enter Password"
          onChange={(e) => {
            setEntringPassword(true)
            setPassword(e.target.value)
          }}
        />
        
        {entringPassword && <PasswordChecklist
          rules={["minLength", "specialChar", "number", "capital"]}
          minLength={5}
          value={password}
          onChange={(isValid) => {
            setIsPasswordValid(isValid);
          }}
        />}
        <button
          onClick={register}
          disabled={!validateEmail(email) || !isPasswordValid}
        >
          Register
        </button>
      </div>
    </div></div>
  );
}

export default Register;
