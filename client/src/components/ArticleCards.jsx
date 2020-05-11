import React, { Component } from 'react';
import './ArticleCards.css';
import ArticleCard from './ArticleCard'
import { getArticles } from '../services/articles'

class ArticleCards extends Component {
  constructor() {
    super()
    this.state = {
      articles: []
    }
  }

  async componentDidMount() {
    const articles = await getArticles()
    this.setState({ articles })
  }

  render() {

    const CARDS = this.state.articles.reverse().map((article, index) =>
      index < 8 ? <ArticleCard _id={article._id} name={article.title} imgURL={article.imgURL} key={index} /> : null
    )

    return (
      <div className="article-cards">
        <div className="latest">LATEST</div>
        <div className="cards">
          {CARDS}
        </div>
      </div>
    )
  }
}

export default ArticleCards