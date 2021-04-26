import React from 'react'
import {NavLink} from "react-router-dom"
import styles from "./MoodChoosingPage.module.css"
import Frame from "/Users/littletree/Documents/GitHub/Info6150/seainfo6150-final-project-webapp/src/UtilitiesComponents/MainFrame/Frame"


export default function MoodChoosingPage() {
    const BodyComponent = () => (
        <ul className={styles.listContainer}>
            <li><NavLink to="/moodchoosing/joyful">Joyful</NavLink></li>    
            <li><NavLink to="/moodchoosing/powerful">Powerful</NavLink></li>
            <li><NavLink to="/moodchoosing/peaceful">Peaceful</NavLink></li>
            <li><NavLink to="/moodchoosing/sad">Sad</NavLink></li>
            <li><NavLink to="/moodchoosing/mad">Mad</NavLink></li>
            <li><NavLink to="/moodchoosing/scared">Scared</NavLink></li>
        </ul>
    )




    return <Frame BodyComponent={BodyComponent}/>
}
