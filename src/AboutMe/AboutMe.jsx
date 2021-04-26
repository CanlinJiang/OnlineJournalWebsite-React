import React from 'react'
import Frame from "../UtilitiesComponents/MainFrame/Frame"
import styles from "./AboutMe.module.css"



export default function AboutMe() {
    


    const BodyComponent = () => (
    <div className={styles.bodyContainer}>
        <div className={styles.textContainer}>
            <p>Hi, here is Canlin (Autumn) Jiang. </p>
            <p>Thank you for being here. This website is a demo of a private personal article collection, which is similar to blogs, but mainly for collection.</p>
            <p>Me? I'm a graduate student learning Information System, but an aweful photographer as well, as you can feel on this website</p>
            <p>Interest? Coding, writing, and picturing. They are basically the same thing to me, creating</p>
            <p>More? Add my instagram <a href="https://www.instagram.com/treee_autumnnn/">here</a></p>
        </div>
        <div className={styles.imageContainer}></div>
    </div>
    )

    return (
        <Frame BodyComponent={BodyComponent}/>

    )
}
