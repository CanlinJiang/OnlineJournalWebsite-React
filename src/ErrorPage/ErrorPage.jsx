import React from 'react'
import Frame from "../UtilitiesComponents/MainFrame/Frame"
import styles from "./ErrorPage.module.css"

export default function ErrorPage() {
    const BodyComponent = () => (
        <div className={styles.textContainer}>
            <h1>404</h1>
            <p>Not Found</p>
            <p>The requested URL was not found on this server</p>
        </div>
    )



    return (
        <Frame BodyComponent={BodyComponent}/>
    )
}
