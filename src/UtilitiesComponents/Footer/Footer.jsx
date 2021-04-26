import React from 'react'
import {Link} from "react-router-dom"
import styles from "./Footer.module.css"

export default function Footer() {
    


    return (
        <nav>
            <ul className={styles.navigation}>
                <li id = "aboutMe" ><Link to="/aboutme">About me</Link></li>
                <li id = "contactMe"><Link to="/contactme">Contact me</Link></li>
            </ul>    
        </nav>
    )
}
