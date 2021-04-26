import React from 'react'
import useFetch from "../UtilitiesFunctions/useFetch";
import ArticleList from "../UtilitiesComponents/ArticleList/ArticleList"
import Frame from "../UtilitiesComponents/MainFrame/Frame"


export default function MineListPage() {
    const {fetchedData: articles, isLoading, error} = useFetch(global.url);
    const BodyComponent = () => (
        <div>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {articles && (<ArticleList articles = {articles.filter( article => article["original_page_url"] == null)}/>)}
        </div>
    )
    
    


    return (
        <Frame BodyComponent={BodyComponent}/>
    )
}