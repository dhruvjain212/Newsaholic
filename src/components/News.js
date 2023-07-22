import React, { Component } from 'react'
import NewsItem from './NewsItem';
 import Spinner from './Spinner';
  import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps= {
    country: 'in',
    pageSize: 8,
    category: 'general',
  }

  static propTypes= {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
 
  capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  constructor(props){
    super(props)
    console.log("hello I am a constructor from news.js component")
    this.state={
           articles: [],
           loading: false,
           page: 1,
          
    }
    document.title= `${this.capitalizeFirstLetter(this.props.category)}- Newsaholic`
  }
  async updateNews(pageNo){
    console.log("componentdidmount")
    const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`
    
    this.setState({loading: true})
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles,
                  totalResults: parsedData.totalResults,
                  loading: false
    })
  }
  async componentDidMount(){
    console.log("componentdidmount")
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pagesize=${this.props.pageSize}`
    
    this.setState({loading: true})
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles,
                  totalResults: parsedData.totalResults,
                  loading: false
    })
  }

  handlePrevClick= async()=>{
   console.log("prev button clicked")

  //  let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=885b7e03fb3e400b8df4b53773a08ff6&page=${this.state.page -1}&pagesize=${this.props.pageSize}`
    
  //  this.setState({loading: true})
  //   let data = await fetch(url)
  //   let parsedData = await data.json()
  //   console.log(parsedData);
    
  //   this.setState({
  //     page: this.state.page-1,
  //     articles: parsedData.articles,
  //     loading: false
  //    })
   this.setState({
    page: this.state.page -1
   })
   this.updateNews();
  }
  handleNextClick= async()=>{
    console.log("next button clicked")
    
    // if(!(Math.ceil(this.state.page +1 > this.state.totalResults/15))){
    // let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=885b7e03fb3e400b8df4b53773a08ff6&page=${this.state.page +1}&pagesize=${this.props.pageSize}`

    // this.setState({loading: true})
    // let data = await fetch(url)
    // let parsedData = await data.json()
    // console.log(parsedData);
    
    // this.setState({
    //   page: this.state.page+1,
    //   articles: parsedData.articles,
    //   loading: false
    //  })

     this.setState({
      page: this.state.page +1
     })
     this.updateNews();
    // }
  }
  render() {
    console.log("render")
    return (
        <>
      <div className='container my-3'>
        <h1 className='text-center'>{this.capitalizeFirstLetter(this.props.category)} - Today's Top Headlines</h1>
       {this.state.loading && <Spinner/>}

      
      <div className='row'>
      {!this.state.loading && this.state.articles.map((element)=>{
          return <div className='col-md-4'  key={element.url}>
          <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageURL={element.urlToImage} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
        })}
         
       </div>
    
       <div className="d-flex justify-content-center">
       <button disabled={this.state.page<=1} type="button" className="btn btn-primary mx-2" onClick={this.handlePrevClick}>Prev</button>
       <button disabled={this.state.page +1 > Math.ceil( this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary mx-2" onClick={this.handleNextClick}>Next</button>
       </div>
     </div>
      </>
    )
  }
}

export default News