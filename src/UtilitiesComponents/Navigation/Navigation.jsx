import React from 'react'
import {NavLink} from "react-router-dom";
import styles from "./Navigation.module.css";


export default function Navigation() {
    


    return (
        <nav className={styles.navigation}>
            <ul className={styles.leftBar}>
                <li ><NavLink to="/minelist" activeStyle={{textDecoration:"underline"}}>Mine's</NavLink></li>
                <li id ><NavLink to="/moodchoosing" activeStyle={{textDecoration:"underline"}}>Moods</NavLink></li>
                <li ><NavLink to="/randomwalk" activeStyle={{textDecoration:"underline"}}>Random Walk</NavLink></li>
            </ul>
            <ul className={styles.rightBar}> 
                <li id = "home" ><NavLink to="/">Home</NavLink></li>
                <li id = "addNewArticle" ><NavLink to="/addnewarticle">Add New Article</NavLink></li>
            </ul>
        </nav>
    )
}



