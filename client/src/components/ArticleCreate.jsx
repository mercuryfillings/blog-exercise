import React, { Component } from 'react'
import './ArticleCreate.css'
import Layout from './shared/Layout'
import { Redirect } from 'react-router-dom'
import { createArticle } from '../services/articles'

class ArticleCreate extends Component {
  constructor() {
    super()
    this.state = {
      article: {
        title: '',
        body: '',
        imgURL: '',
        username: ''
      },
      created: false
    }
  }

  handleChange = (event) => {
    const { title, value } = event.target
    this.setState({
      article: {
        ...this.state.article,
        [title]: value
      }
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createArticle(this.state.article)
    this.setState({ created })
  }

  render() {
    const { article, created } = this.state

    if (created) {
      return <Redirect to={`/articles`} />
    }
    return (
      <Layout>
        <form className="create-form" onSubmit={this.handleSubmit}>
          <input
            className="input-name"
            placeholder='Title'
            value={article.title}
            name='title'
            required
            autoFocus
            onChange={this.handleChange}
          />
          <input
            className="input-price"
            placeholder='Username'
            value={article.username}
            name='username'
            required
            onChange={this.handleChange}
          />
          <textarea
            className="textarea-description"
            rows={10}
            placeholder='Body'
            value={article.body}
            name='body'
            required
            onChange={this.handleChange}
          />
          <input
            className="input-image-link"
            placeholder='Image Link'
            value={article.imgURL}
            name='imgURL'
            required
            onChange={this.handleChange}
          />
          <button type='submit' className="submit-button">Submit</button>
        </form>
      </Layout>
    )
  }
}

export default ArticleCreate