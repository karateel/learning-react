import React from "react";

class ClassComponent extends React.Component{

  constructor() {
    super();
    this.state = {
      count: 0
    }
    this.like = this.like.bind(this)
    this.dislike = this.dislike.bind(this)
  }

like(){
    this.setState({count: this.state.count + 1})
  }
dislike(){
    this.setState({count: this.state.count - 1})
  }

  render() {
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.like}>Like</button>
        <button onClick={this.dislike}>Dislike</button>
      </div>
    )
  }
}

export default ClassComponent