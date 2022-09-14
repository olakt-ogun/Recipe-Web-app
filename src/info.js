import React from "react";

class Info extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const title = this.props.title;
    const showTitle = true;
    return (
      <div>
        <p>{showTitle ? title : "No Title"}</p>
        <h1>Inventory System</h1>
        <p>Manage Your Stuff</p>
      </div>
    );
  }
}
export default Info;
