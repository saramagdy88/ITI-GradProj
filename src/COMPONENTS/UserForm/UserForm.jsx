import React, { useState } from "react";
import styles from "./UserForm.module.css"; // Import the CSS module
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const UserForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.user}>
      <div className={styles.signup}>
        <div className={styles["signup-container"]}>
          <div className={`${styles["form-container"]} container`}>
            <div className={styles["signup-form"]}>
              <h2>Register</h2>
              <form onSubmit={signUp}>
                <div className={styles["form-group"]}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Enter your name" />
                </div>
                <div className={styles["form-group"]}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles["form-group"]}>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Create your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
