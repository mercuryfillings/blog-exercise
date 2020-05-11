import React from 'react';
import './Article.css';
import { Link } from 'react-router-dom'

const Article = (props) => {
    return (
        <>
            <Link className="article" to={`/articles/${props._id}`}>
                <img className="article-image" src={props.imgURL} alt={props.title} />
                <div className="article-name">{props.title}</div>
            </Link>
        </>
    )
}

export default Article