import React from 'react'
import './App.css'
import Home from './components/Home'
import Articles from './components/Articles'
import ArticleCreate from './components/ArticleCreate'
import ArticleEdit from './components/ArticleEdit'
import ArticleFull from './components/ArticleFull'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" render={props => <Home />} />
        <Route exact path="/articles" render={props => <Articles />} />
        <Route exact path="/add-article" render={props => <ArticleCreate />} />
        <Route exact path="/articles/:id/edit" component={ArticleEdit} />
        <Route exact path="/articles/:id" component={ArticleFull} />
      </Switch>
    </div>
  )
}

export default App