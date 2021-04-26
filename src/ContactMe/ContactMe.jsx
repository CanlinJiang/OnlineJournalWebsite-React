import React from 'react'
import Frame from "../UtilitiesComponents/MainFrame/Frame"
import styles from "./ContactMe.module.css"
import {useState} from "react"


export default function ContactMe() {
    
    const [submittedForm, setSubmittedForm] = useState();

    const onSubmit = (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      setSubmittedForm(data);
      console.log("DATA");
    };

    const BodyComponent = () => (
        submittedForm? (
            <div className={styles.form}>
                <div className={styles.left}>
                    <p>{submittedForm.get("firstName")}</p>
                    <p>{submittedForm.get("lastName")}</p>
                    <p>{submittedForm.get("email")}</p>
                </div>
                <p className={styles.right}>{submittedForm.get("message")}</p>
            </div>
        ) : (
        <form id="messageForm" className={styles.form} onSubmit={onSubmit}>
            <div className={styles.left}>
                <input type="text" placeholder="First Name:" name="firstName" ></input>
                <input type="text" placeholder="Last Name:" name="lastName"></input>
                <input type="text" placeholder="Email:" name="email"></input>
                <input type="submit" className={styles.button}></input>
             </div>
        <textarea className={styles.right} form="messageForm" name="message"> Enter message here...</textarea>
        </form>
        )

    
    )

    return (
        <div>
            <Frame BodyComponent={BodyComponent}></Frame>
        </div>
    )
}
