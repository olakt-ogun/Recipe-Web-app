import React from "react";

class Info extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    }
  }

  buttonPressed() {
    this.setState({
      count: this.state.count + 2
    })
  }
  
  render() {
    return(
      <div>
        {""}
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.buttonPressed()}>Click Me!</button>
    </div>
    )
  }
}


export default Info;
