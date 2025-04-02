import React, { Component } from 'react'
import axios from 'axios'

export class Getposts extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      loading: false,
      posts: [],
      error: false
    }
  }

  // componentDidMount() {
  //   console.log('did mount')
  //   this.setState({ loading: true })
  //   this.setState({error: false})
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => {
  //       this.setState({ posts: res.data })
  //       this.setState({loading: false})
  //     }).catch((err) => {
  //       this.setState({ err: err.message })
  //       this.setState({loading: false})
  //   })
  // }

  getData = () => {
      this.setState({ loading: true })
    this.setState({error: false})
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        this.setState({ posts: res.data })
        this.setState({loading: false})
      }).catch((err) => {
        this.setState({ err: err.message })
        this.setState({loading: false})
    })
  }
  render() {
    console.log('render')
    return (
      <div>
        <h3>Get data</h3>
        <button onClick={this.getData}>getdata</button>
        {
        this.state.loading ? <h3>Loading</h3> : this.state.error ? <h3>{this.state.error}</h3> : 
          <div>
            {
              this.state.posts.map((post) => {
                return <div>
                  <h3>Id: {post.id}</h3>
                  <h3>Title: {post.title}</h3>
                  <h3>Body: {post.body}</h3>
                </div>
              })
            }
          </div>
      }

      </div>

    )
  }
}

export default Getposts