import React from 'react'
import './Home.css'
import ArticleCards from './ArticleCards'
import Layout from './shared/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <ArticleCards />
      </div>
    </Layout>
  )
}

export default Home