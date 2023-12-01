import React, { Component } from 'react'

export class NewsItem extends Component {
   
  render() {
    let {title, description, imgUrl, newsUrl,author,date,source} = this.props
    return (
      
<div className="max-w-sm m-4 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
    <a href="/">
        <img className="rounded-t-lg" src={!imgUrl?"https://images.hindustantimes.com/tech/img/2023/10/21/1600x900/mars-5564141_960_720_1679408567723_1697901417920.jpg":imgUrl} alt="" />
    </a>
    <div className="p-5">
        <span href="/">
            <h5 className=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title.slice(0,95)}</h5>
        </span>
        <p className="truncate mb-3 font-normal text-gray-700 dark:text-gray-400">{!description?"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem et officiis, natus asddw":description}</p>
        <p>By <strong>{!author?"unknows":author}</strong> on <strong>{new Date(date).toGMTString()}</strong> from <strong>{source}</strong></p>
        <a href={newsUrl} target='_blank' rel="noreferrer" className="mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>



    )
  }
}

export default NewsItem
