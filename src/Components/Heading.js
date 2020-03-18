import React, { Component } from "react";

class Heading extends Component {
  render() {
    return (
      <div className="home">
        <div className="homeLogo">
          <h3>meo</h3>
        </div>

        <form>
          <input type="text" placeholder="search..." value="search" onChange={()=> console.log()}/>
        </form>
      </div>
    );
  }
}

export default Heading;
