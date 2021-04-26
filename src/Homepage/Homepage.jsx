import React from 'react'
import {NavLink} from "react-router-dom"
import Frame from "../UtilitiesComponents/MainFrame/Frame"
import styles from "./Homepage.module.css"



export default function Homepage() {
    const Header = () => (
        <nav className={styles.topNav}>
            <ul className={styles.navigation}> 
                <li id = "home" ><NavLink to="/">Home</NavLink></li>
                <li id = "addNewArticle"><NavLink to="/addnewarticle">Add New Article</NavLink></li>
            </ul>
        </nav>
    )


    const Body = () => (
    <div className={styles.container}>
        <div className={styles.titleContainer}>
            <h1>Article collection</h1>
            <nav className={styles.midNav}>
            <ul className={styles.navigation}>
                <li ><NavLink to="/minelist">Mine's</NavLink></li>
                <li id ><NavLink to="/moodchoosing">Moods</NavLink></li>
                <li ><NavLink to="/randomwalk">Random Walk</NavLink></li>
            </ul>
            </nav>
        </div>
        <img className={styles.imageContainer}
            srcset={
            "images/IMG_0489-300_x_300.JPG 300w",
            "images/IMG_0489-600_x_600.JPG 600w",
            "images/IMG_0489-900_x_900.JPG 900w"
            }
            sizes="
            (max-width: 800px) 300px,
            (max-width: 1000px) 400px,
            (max-width: 1300px) 500px, 
            700px
            "
            src="IMG_0489-600_x_600.JPG"
            alt="black and white photo: afternoon">   
          </img>
    </div>
    )
        
    



    return (
        <Frame Header={Header} BodyComponent={Body}/>

    )
}
