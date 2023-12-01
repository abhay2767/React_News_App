import React, { Component } from 'react'
import NewsItem from './NewsItem'
import LoadingSpiner from './LoadingSpiner'
import PropTypes from 'prop-types' /* impt */
import InfiniteScroll from 'react-infinite-scroll-component'


export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  constructor(props) {
    super(props);
    console.log("I am constructor from news component")
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalArticles:0
    }
    document.title = `${this.capitalize(this.props.category)} - NewsFact`;
  }
  /* async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url)
    let parseData = await data.json()
    console.log(parseData)
    this.setState({
      articles: parseData.articles,
      totalArticles: parseData.totalResults,
      loading: false
    })
  } */
  async componentDidMount() {
    console.log("I am componentDidMount")
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url)
    this.props.setProgress(30)
    let parseData = await data.json()
    console.log(parseData)
    this.props.setProgress(70)
    this.setState({
      articles: parseData.articles,
      totalArticles: parseData.totalResults,
      loading: false
    })
    this.props.setProgress(100)
    /* this.updateNews(); */
  }

  // handleNext = async () => {
  //   console.log("Next");
  //   if (!(this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize))) {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //     this.setState({ loading: true });
  //     let data = await fetch(url)
  //     let parseData = await data.json()
  //     console.log(parseData)
  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: parseData.articles,
  //       loading: false
  //     })
  //   }
  //   /* this.setState({page: this.state.page + 1});
  //   this.updateNews(); */

  // }

  // handlePrev = async () => {
  //   console.log("Prev")

  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url)
  //   let parseData = await data.json()
  //   console.log(parseData)
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parseData.articles,
  //     loading: false
  //   })
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // }

// Infinite Scrollbar function for fetMoredate
fetchMoreData = async()=>{
  this.setState({page: this.state.page + 1})
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url)
    let parseData = await data.json()
    console.log(parseData)
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalArticles: parseData.totalResults,
      loading: false
    })
}

  render() {
    console.log("I am render")
    return (
      <div>

        <h1 className="flex justify-center m-2 mt-20 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Better Fact on </span>{this.capitalize(this.props.category)}</h1>
        {this.state.loading && <LoadingSpiner />}

        {/* Infinite scrollbar */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalArticles}
          loader={<LoadingSpiner />}
        >







        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-4'>
        

          {/* Next page or previous page */}
          {/* {!this.state.loading && this.state.articles.map((element) => {
            return <div key={element.url}>
              <NewsItem title={(element.title ? element.title.slice(0, 20) : "")} description={(element.description ? element.description.slice(0, 88) : "")} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date = {element.publishedAt} source={element.source.name} />
            </div>
          })} */}
          {this.state.articles.map((element) => {
            return <div  key={element.url}>
              <NewsItem title={(element.title ? element.title.slice(0, 20) : "")} description={(element.description ? element.description.slice(0, 88) : "")} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}

        </div>
      </InfiniteScroll>
        {/* Next and Previous Button */ }
    {/* {!this.state.loading && <div className='flex justify-center'>
          <button disabled={this.state.page <= 1} onClick={this.handlePrev} type="button" className="bg-green-700 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-green-800 hover:text-white px-3">
            <div className="flex flex-row align-middle">
              <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
              </svg>
              <p className="ml-2">Prev</p>
            </div>
          </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} onClick={this.handleNext} type="button" className="bg-green-700 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-green-800 hover:text-white px-3">
            <div className="flex flex-row align-middle">
              <span className="mr-2">Next</span>
              <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </button>
        </div>} */}
      </div >
    )
  }
}

export default News
