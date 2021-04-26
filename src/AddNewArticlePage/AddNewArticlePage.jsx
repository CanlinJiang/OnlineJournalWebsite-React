import React from 'react'
import {useState} from 'react'
import {useHistory} from "react-router-dom"
import postData from "../UtilitiesFunctions/postData"
import styles from "./AddNewArticlePage.module.css"
import Frame from "../UtilitiesComponents/MainFrame/Frame"

export default function AddNewArticlePage() {

const [title, setTitle] = useState(null)
const [mood, setMood] = useState(null)
const [status, setStatus] = useState(null)
const [body, setBody] = useState(null)
const [shortQuote, setShortQuote] = useState(null)
const [author, setAuthor] = useState(null)
const [date, setDate] = useState(null)
const [length, setLength] = useState(null)
const [imageUrl, setImageUrl] = useState(null)
const [originalUrl, setOriginalUrl] = useState(null)
const histroy = useHistory();



const handleSubmit = (e) => {
    e.preventDefault();
    const article = {title, mood, status, body, shortQuote, author, date, length, image_url: imageUrl, original_url: originalUrl};
    const url = global.url;
    postData({url, article, actionAfterPost})
    
}

const actionAfterPost = () => {
    alert("Update successfully!")
    histroy.push("/randomwalk");
}

const BodyComponent = () => (
    <div>
            <form className = {styles.flexContainer} id="newArticle" onSubmit = {handleSubmit} >

                <div className={styles.topContainer}>
                <input className={styles.title} type="text" placeholder="Title:" required onChange={(e) => setTitle(e.target.value)}></input>
                <select className={styles.topButton} onChange = {(e) => setMood(e.target.value)}>
                    <option disabled selected>Mood</option>
                    <option value="Joyful">Joyful</option>
                    <option value="Powerful">Powerful</option>
                    <option value="Peaceful">Peaceful</option>
                    <option value="Sad">Sad</option>
                    <option value="Mad">Mad</option>
                    <option value="Scared">Scared</option>
                </select>
                <select className={styles.topButton} onChange = {(e) => setStatus(e.target.value)}>
                    <option disabled selected>Read/unread</option>
                    <option value="Read">Read</option>
                    <option value="Unread">Unread</option>
                </select>
                </div>

                
                <textarea className={styles.bodyContainer} form="newArticle" onChange = {(e) => setBody(e.target.value)}>Enter article here...</textarea>



                <div className={styles.bottomContainer}>

                    <textarea className={styles.shortQuote} form="newArticle" onChange = {(e) => setShortQuote(e.target.value)}>Enter short quote here...</textarea>
                    
                    <div className={styles.columnLinkContainer}>
                    <form className={styles.length} onChange = {(e) => setLength(e.target.value)}>
                        <div><input type="radio" id="short" name="length" value="Short"></input><label for = "short"> Short</label></div>
                        <div><input type="radio" id="medium" name="length" value="Medium"></input><label for = "medium"> Medium</label> </div>   
                        <div><input type="radio" id="long" name="length" value="Long"></input><label for = "long"> Long</label></div>
                    </form>
                    <input className={styles.link} type="text" placeholder="Image Link: " pattern="https?://.+" onChange={(e) => setImageUrl(e.target.value)}></input>
                    <input className={styles.link} type="text" placeholder="Original Article Link:" pattern="https?://.+" onChange={(e) => setOriginalUrl(e.target.value)}></input>
                    </div>
                </div>

                <div class={styles.lastRowContainer}>
                        <input type="text" placeholder="Author:" required onChange={(e) => setAuthor(e.target.value) }></input>
                        <input type="text" placeholder="Date: 2021-04-21" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" required onChange={(e) => setDate(e.target.value)}></input>
                        <input type="submit"></input>
                    </div>

                
                


                

            </form>

            
        </div>
)



    return (
        <Frame BodyComponent={BodyComponent}/>
    )
}
