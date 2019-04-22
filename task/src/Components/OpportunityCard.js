import React, { Component } from "react";

export default class OpportunityCard extends Component {
  render() {
    return (
      <div >
        <p>{this.props.opp.title}</p>
      </div>
    );
  }
}

