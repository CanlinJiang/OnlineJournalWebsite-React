import React from 'react'
import {useParams} from "react-router-dom";
import {useHistory} from 'react-router-dom'
import useFetch from '../../UtilitiesFunctions/useFetch';
import postData from '../../UtilitiesFunctions/postData';
import deleteData from "../../UtilitiesFunctions/deleteData";
import styles from "./ArticleDetailPage.module.css";
import Frame from "../MainFrame/Frame"
import HTMLText from "../HTMLText/HTMLText"


export default function ArticleDetailPage() {
    const id = useParams().id;
    const history = useHistory();
   
    const {fetchedData: article, isLoading, error} = useFetch(global.url + id);

    const updateStatus = (e) => {
        article.status = e.target.value;
        const url = global.url;
        deleteData(global.url + id);
        postData({url, article});
    }

    const BodyComponent = () => (
        <div>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {article && (
            <div className={styles.container}>
                <div className={styles.firstRow}>
                    <h1>{article.title}</h1>
                    <span>{article.author}</span>
                    <span>{article.date}</span>
                </div>

                <div className={styles.centerRow}><HTMLText text={article.body}/></div>

                <div className={styles.lastRow}>
                    <button className={styles.button} onClick={() => {
                        deleteData(global.url + id);
                        alert("Article deleted!");
                        history.go(-1);
                    }
                
                }>Delete</button>
                    <form className={styles.form} onChange = {updateStatus}>
                        <input type="radio" id="read" name="status" value="Read"></input><label for = "read"> Read     </label>
                        <input type="radio" id="unread" name="status" value="Unread"></input><label for = "unread"> Unread</label>      
                    </form>
                </div>
            </div>)}
        </div>
    )


    return ( 
        <Frame BodyComponent={BodyComponent}/>
    )
}
