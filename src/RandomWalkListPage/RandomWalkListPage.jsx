import React from 'react'
import useFetch from "../UtilitiesFunctions/useFetch";
import ArticleList from "../UtilitiesComponents/ArticleList/ArticleList"
import Frame from "../UtilitiesComponents/MainFrame/Frame"


export default function RandomWalkListPage() {
    const {fetchedData: articles, isLoading, error} = useFetch(global.url);
    
    const BodyComponent = () => (
        <div>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {articles && (<ArticleList articles = {articles}/>)}
        </div>
    )
    
    


    return (
        <Frame BodyComponent={BodyComponent}/>
    )
}
