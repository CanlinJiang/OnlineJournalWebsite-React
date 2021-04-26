import {useState} from "react";


export default function postData({url, article, actionAfterPost}) {
    fetch(url, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(article)
        }).then (() => {
            if (actionAfterPost != null){
                actionAfterPost();
            }
            
        })

    return;
}
