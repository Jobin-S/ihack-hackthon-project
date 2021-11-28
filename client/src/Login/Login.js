import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import './login.css'
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // useEffect(() => {
  //     if(!auth.currentUser){
  //         window.location.href ='/'
  //     }
  // }, [])
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const login = async () => {
    if (!validateEmail(email)) {
      return;
    }
    try {
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          console.log(userCredential);
          window.location.href = "/";
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div>
        <h1>Login</h1>
        <input
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={!validateEmail(email) || !password} onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Login;
