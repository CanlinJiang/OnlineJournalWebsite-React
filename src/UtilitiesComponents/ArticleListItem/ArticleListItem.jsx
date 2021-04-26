import React from 'react'
import styles from "./ArticleListItem.module.css"
import {Link} from "react-router-dom"

export default function ArticleListItem({article}) {



    return (
        <li className={styles.listItemContainer}>
            <img className={styles.itemImage} src={article.image_url} alt={article.title + "'s image"} ></img>
            <div className={styles.itemTitle}><Link to={"/articles/" + article.id}>{article.title}</Link></div>
        </li>
    )
}
