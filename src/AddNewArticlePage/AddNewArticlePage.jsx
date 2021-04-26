import React from 'react'

import {useHistory} from "react-router-dom"
import postData from "../UtilitiesFunctions/postData"
import styles from "./AddNewArticlePage.module.css"
import Frame from "../UtilitiesComponents/MainFrame/Frame"

export default function AddNewArticlePage() {


const histroy = useHistory();



const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const article = {title:data.get("title"), mood:data.get("mood"), statu:data.get("status"), body:data.get("body"), shortQuote:data.get("shortQuote"), author:data.get("author"), date:data.get("date"), length:data.get("length"), image_url:data.get("imageUrl"), original_url:data.get("orginalUrl")};
    const url = global.url;
    postData({url, article, actionAfterPost})
    
}

const actionAfterPost = () => {
    alert("Update successfully!")
    histroy.push("/randomwalk");
}

const BodyComponent = () => (
    <div>
            <form className ={styles.flexContainer} id="newArticle" onSubmit = {handleSubmit} >

                <div className={styles.topContainer}>
                <input className={styles.title} type="text" name = "title" placeholder="Title:" required ></input>
                <select className={styles.topButton} name = "mood"  >
                    <option disabled selected>Mood</option>
                    <option value="Joyful">Joyful</option>
                    <option value="Powerful">Powerful</option>
                    <option value="Peaceful">Peaceful</option>
                    <option value="Sad">Sad</option>
                    <option value="Mad">Mad</option>
                    <option value="Scared">Scared</option>
                </select>
                <select className={styles.topButton} name = "status"  >
                    <option disabled selected>Read/unread</option>
                    <option value="Read">Read</option>
                    <option value="Unread">Unread</option>
                </select>
                </div>

                
                <textarea className={styles.bodyContainer}  name = "body" form="newArticle">Enter article here...</textarea>



                <div className={styles.bottomContainer}>

                    <textarea className={styles.shortQuote} name = "shorteQuote" form="newArticle" >Enter short quote here...</textarea>
                    
                    <div className={styles.columnLinkContainer}>
                    <form className={styles.length} name = "length" >
                        <div><input type="radio" id="short" name="length" value="Short"></input><label for = "short"> Short</label></div>
                        <div><input type="radio" id="medium" name="length" value="Medium"></input><label for = "medium"> Medium</label> </div>   
                        <div><input type="radio" id="long" name="length" value="Long"></input><label for = "long"> Long</label></div>
                    </form>
                    <input className={styles.link} name = "imageUrl"  type="text" placeholder="Image Link: " pattern="https?://.+" ></input>
                    <input className={styles.link} name = "originalUrl" type="text" placeholder="Original Article Link:" pattern="https?://.+" ></input>
                    </div>
                </div>

                <div class={styles.lastRowContainer}>
                        <input name = "author" type="text" placeholder="Author:" required ></input>
                        <input name = "date" type="text" placeholder="Date: 2021-04-21" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" required ></input>
                        <input type="submit"></input>
                    </div>

                
                


                

            </form>

            
        </div>
)



    return (
        <Frame BodyComponent={BodyComponent}/>
    )
}
