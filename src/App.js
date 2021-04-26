import { Switch, Route} from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import MineListPage from "./MineListPage/MineListPage";
import MoodChoosingPage from "./MoodPage/MoodChoosingPage/MoodChoosingPage";
import MoodListPage from "./MoodPage/MoodListPage/MoodListPage"
import RandomWalkListPage from "./RandomWalkListPage/RandomWalkListPage";
import AddNewArticlePage from "./AddNewArticlePage/AddNewArticlePage";
import ArticleDetailPage from "./UtilitiesComponents/ArticleDetailPage/ArticleDetailPage";
import AboutMe from "./AboutMe/AboutMe";
import ContactMe from "./ContactMe/ContactMe";
import ErrorPage from "./ErrorPage/ErrorPage";
import React from 'react'

export default function App() {
  return (
    <Switch>
        <Route exact path = "/"><Homepage/></Route>
        <Route exact path = "/minelist"><MineListPage/></Route>
        <Route exact path = "/moodchoosing"><MoodChoosingPage/></Route>
        <Route exact path = "/moodchoosing/:mood"><MoodListPage/></Route>
        <Route exact path = "/randomwalk"><RandomWalkListPage/></Route>
        <Route exact path = "/addnewarticle"><AddNewArticlePage/></Route>
        <Route exact path = "/aboutme"><AboutMe/></Route>
        <Route exact path = "/contactme"><ContactMe/></Route>
        <Route exact path = "/articles/:id"><ArticleDetailPage/></Route>
        {/* <Route exact path = "/articles/*"><ErrorPage/></Route> */}
        <Route><ErrorPage/></Route>
      </Switch>
  )
}




