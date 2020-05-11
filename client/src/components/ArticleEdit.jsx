import React, { Component } from 'react'
import './ArticleEdit.css'
import { Redirect } from 'react-router-dom'
import Layout from './shared/Layout'
import { getArticle, updateArticle } from '../services/articles'

class ArticleEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      article: {
        name: '',
        description: '',
        imgURL: '',
        price: ''
      },
      updated: false
    }
  }

  async componentDidMount() {
    let { id } = this.props.match.params
    const article = await getArticle(id)
    this.setState({ article })
  }


  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      article: {
        ...this.state.article,
        [name]: value
      }
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    let { id } = this.props.match.params
    const updated = await updateArticle(id, this.state.article)
    this.setState({ updated })
  }

  render() {

    const { article, updated } = this.state

    if (updated) {
      return <Redirect to={`/articles/${this.props.match.params.id}`} />
    }

    return (
      <Layout>
        <div className="article-edit">
          <div className="image-container">
            <img className="edit-article-image" src={article.imgURL} alt={article.name} />
            <form onSubmit={this.handleSubmit}>
              <input
                className="edit-input-image-link"
                placeholder='Image Link'
                value={article.imgURL}
                name='imgURL'
                required
                onChange={this.handleChange}
              />
            </form>
          </div>
          <form className="edit-form" onSubmit={this.handleSubmit}>
            <input
              className="input-name"
              placeholder='Name'
              value={article.name}
              name='name'
              required
              autoFocus
              onChange={this.handleChange}
            />
            <input
              className="input-price"
              placeholder='Price'
              value={article.price}
              name='price'
              required
              onChange={this.handleChange}
            />
            <textarea
              className="textarea-description"
              rows={10}
              cols={78}
              placeholder='Description'
              value={article.description}
              name='description'
              required
              onChange={this.handleChange}
            />
            <button type='submit' className="save-button">Save</button>
          </form>
        </div>
      </Layout>
    )
  }
}

export default ArticleEdit