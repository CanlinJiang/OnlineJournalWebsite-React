import React from 'react'
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import styles from "./Frame.module.css"

export default function Frame({Header, BodyComponent, Footer}) {
    return (
        <div className={styles.container}>
            <div className={styles.header}><Header/></div>
            <div className={styles.body}><BodyComponent/></div>
            <div className={styles.footer}><Footer/></div>
        </div>
    )
}

Frame.defaultProps = {
    Header: Navigation,
    Footer: Footer
}
