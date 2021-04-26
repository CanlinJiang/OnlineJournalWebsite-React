import React from 'react';
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import styles from "./ArticleList.module.css";


export default function ArticleList({articles}) {
    
    

    return (
        <div>
            <ul className={styles.listContainer}>
            {articles.map((article) => (<ArticleListItem article={article} key={article.id} />
        ))}
            </ul>
        </div>
    )
}
