import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageURL, newsURL, author, date, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card " >
        <span className=" position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source.slice(0,30)} </span>
        <img src={imageURL?imageURL:"https://www.usatoday.com/gcdn/authoring/images/motleyfool/2023/06/20/USAT/70336713007-delinquency-autos-ny-fed-6-16-23.png?crop=3390,1915,x0,y0&width=3200&height=1808&format=pjpg&auto=webp"} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
        
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author? author:"Unknown Author"} on {new Date(date).toGMTString()}</small></p>

          <a  rel="noreferrer" href={newsURL} target='_blank' className="btn btn-sm btn-primary">Read more</a>
        </div>
     </div>
      </div>
      
    )
  }
}

export default NewsItem