import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react'
import News from './Components/News';
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  pageSize = 8
  // apikey = '9bba9489d313423bb3a99519b134193e' /* abhaydubey2767+newsapi@gmail.com /Abhay2767@ */
  apikey = 'ef46d1ecbe7c4bdeb24ee5914ac468e9'  /* dubeyabhay2767+newsapi@gmail.com /Abhay2767@ */
  


  state = {
    progress:0,
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  



  render() {
    return (
      <div>
        
        <Navbar />
        <LoadingBar
        height={3}
        color='green'
        progress={this.state.progress}
      />
        <Routes>
        <Route exact path="/" element = {<News apiKey={this.apikey} setProgress = {this.setProgress} key = "general" pageSize={this.pageSize} country= "in" category="general"/>}/>
        <Route exact path="/business" element = {<News apiKey={this.apikey} setProgress = {this.setProgress} key = "business" pageSize={this.pageSize} country= "in" category="business"/>}/>
        <Route exact path="/entertainment" element = {<News apiKey={this.apikey} setProgress = {this.setProgress} key = "entertainment" pageSize={this.pageSize} country= "in" category="entertainment"/>}/>
        <Route exact path="/health" element = {<News apiKey={this.apikey} setProgress = {this.setProgress} key = "health" pageSize={this.pageSize} country= "in" category="health"/>}/>
        <Route exact path="/science" element = {<News apiKey={this.apikey} setProgress = {this.setProgress} key = "science" pageSize={this.pageSize} country= "in" category="science"/>}/>
        <Route exact path="/sports" element = {<News apiKey={this.apikey} setProgress = {this.setProgress} key = "sports" pageSize={this.pageSize} country= "in" category="sports"/>}/>
        <Route exact path="/technology" element = {<News apiKey={this.apikey} setProgress = {this.setProgress} key = "technology" pageSize={this.pageSize} country= "in" category="technology"/>}/>
        </Routes>
        
      </div>
    )
  }
}