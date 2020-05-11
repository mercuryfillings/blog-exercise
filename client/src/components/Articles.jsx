import React, { Component } from 'react'
import './Articles.css'
import Article from './Article'
import Search from './Search'
import { AZ, ZA, lowestFirst, highestFirst } from "./Sort"
import Layout from './shared/Layout'
import { getArticles } from '../services/articles'

class Articles extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      filterValue: '',
      filteredArticles: null,
      selectValue: 'Featured'
    }
  }

  async componentDidMount() {
    const articles = await getArticles()
    this.setState({ articles })
  }

  handleSearchChange = event => {
    const filter = () => {
      const filteredArticles = this.state.articles.filter(article => {
        return article.name.toLowerCase().includes(this.state.filterValue.toLowerCase())
      })
      this.setState({ filteredArticles })
    }
    this.setState({ filterValue: event.target.value }, filter)
  }

  handleSortChange = event => {
    this.setState({ selectValue: event.target.value });
    let input = event.target.value; // a-z
    const { articles } = this.state;
    switch (input) {
      case "name-ascending":
        this.setState({
          articles: AZ(articles)
        });
        break;
      case "name-descending":
        this.setState({
          articles: ZA(articles)
        });
        break;
      case "price-ascending":
        this.setState({
          articles: lowestFirst(articles)
        });
        break;
      case "price-descending":
        this.setState({
          articles: highestFirst(articles)
        });
        break;
      default:
        break
    }
  }

  handleSubmit = event => event.preventDefault()

  render() {
    const articles = this.state.filteredArticles ? this.state.filteredArticles : this.state.articles
    const ARTICLES = articles.map((article, index) =>
      <Article _id={article._id} name={article.name} imgURL={article.imgURL} price={article.price} key={index} />
    )

    return (
      <Layout>
        <Search onSubmit={this.handleSubmit} value={this.state.filterValue} onChange={this.handleSearchChange} />
        <form className="sort-container" onSubmit={this.handleSubmit}>
          <label htmlFor="sort">SORT BY:</label>
          <select className="sort" value={this.state.selectValue} onChange={this.handleSortChange}>
            <option className="option" value="name-ascending" >&nbsp; Alphabetically, A-Z &nbsp;</option>
            <option value="name-descending">&nbsp; Alphabetically, Z-A &nbsp;</option>
            <option value="price-ascending">&nbsp; Price, low to high &nbsp;</option>
            <option value="price-descending">&nbsp; Price, high to low &nbsp;</option>
          </select>
        </form>
        <div className="articles">
          {ARTICLES}
        </div>
      </Layout>
    )
  }
}

export default Articles