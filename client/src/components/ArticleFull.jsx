import React, { Component } from 'react'
import './ArticleFull.css'
import Layout from './shared/Layout'
import { getArticle, deleteArticle } from '../services/articles'
import { Link } from 'react-router-dom'

class ArticleFull extends Component {
  constructor(props) {
    super(props)
    this.state = {
      article: {
        title: '',
        body: '',
        imgURL: ''
      }
    }
  }

  async componentDidMount() {
    let { id } = this.props.match.params
    const article = await getArticle(id)
    this.setState({ article })
  }

  render() {
    const { article } = this.state
    return (
      <Layout>
        <div className="article-detail">
          <img className="article-detail-image" src={article.imgURL} alt={article.title} />
          <div className="detail">
            <div className="name">{article.title}</div>
            <div className="price">{`By ${article.username}`}</div>
            <div className="description">{article.body}</div>
            <div className="button-container">
              <button className="edit-button"><Link className="edit-link" to={`/articles/${article._id}/edit`}>Edit</Link></button>
              <button className="delete-button" onClick={() => deleteArticle(article._id)}>Delete</button>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ArticleFull
