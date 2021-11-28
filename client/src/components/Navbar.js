import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

import './navbar.css'

function Navbar() {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <div class="nav-bar">
      <div class="container_nav-bar">
        <header>Wastified.</header>
        {user ? (
          <div>
            {user.displayName}
            <button onClick={logOut} style={{ marginLeft: "1rem" }}>
              Log out
            </button>
          </div>
        ) : (
          <div id="login">
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/register">
              <button style={{ marginLeft: "1rem" }}>REGISTER</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
