import React from 'react'
import {useParams} from "react-router-dom";
import useFetch from "../../UtilitiesFunctions/useFetch.jsx";
import ArticleList from "/Users/littletree/Documents/GitHub/Info6150/seainfo6150-final-project-webapp/src/UtilitiesComponents/ArticleList/ArticleList.jsx"
import Frame from "/Users/littletree/Documents/GitHub/Info6150/seainfo6150-final-project-webapp/src/UtilitiesComponents/MainFrame/Frame"

export default function MoodListPage() {

    const rawMood = String(useParams().mood);

    const mood = rawMood.charAt(0).toUpperCase() + rawMood.slice(1);


    const {fetchedData: articles, isLoading, error} = useFetch(global.url);


    const BodyComponent = () => (
        <div>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {articles && (<ArticleList articles = {articles.filter( article => article.mood == mood)}/>)}
        </div>
    )
    
    


    return (
        <Frame BodyComponent={BodyComponent}/>
    )
    
}
