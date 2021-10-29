import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
    render() {
        //props:
        let {title, description, imgUrl, newsUrl, author, date, source}=this.props;
        return (
            <div className="my-3">
            <span className="badge bg-warning">{source}</span>
                <div className="card">
                    <img src={imgUrl} className="card-img-top" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">{author!=null?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
