import './App.css';
import axios from 'axios';

import React, { Component } from 'react'

class App extends Component {
  
        state = {
        news: [],

    }





// fetchNews = () => {

//   const url
//   = `https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`

//     axios.get(url)
//     .then( (response) => {
      
//       this.setState( {news: response.data})})
//       .catch(err => console.log(err))
// }

fetchNews = async() => {

  let arrToPush = [];
  const url
  = `https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`

    let idArr = await axios.get(url).then(data => data)

    idArr.data.forEach( async id => {
      let obj = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
     
      arrToPush.push(obj.data)
      console.log("for each runing")
    })
    console.log("arrToPush", arrToPush, arrToPush.title, arrToPush.url)

    this.setState( { news: arrToPush }, ()=> console.log("arrow func after arr to push",this.state.news) )
      
      return idArr;
}

/* by: "clessg"
descendants: 0
id: 27450101
score: 2
time: 1623257164
title: "Three real-world examples of distributed Elixir (pt. 2)"
type: "story"
url: "https://bigardone.dev/blog/2021/06/06/three-real-world-examples-of-distributed-elixir-pt */



componentDidMount() {
  this.fetchNews()
  console.log("componentDidMount",this.state.news)
}

  render() {
    console.log(this.state.news)

    return (
      <div>
        
        <h1>HackerNews App</h1>          
        {this.state.news.length !== 0 ? 
          console.log("length different than zero",this.state) 
       : 
          console.log("gnello", this.state.news.title, this.state.news.url, this.state.news)
       }

      </div>
    )
  }

}


export default App;
