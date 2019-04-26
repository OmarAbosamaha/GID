import React, { Component } from "react";

import "./App.css";
import OpportunitiesList from "./Components/OpportunitiesList";
import axios from "axios";
class App extends Component {
  _isMounted = false;
  state = {
    opps: [],
    current_page: 1,
    loading: false
  };
  componentWillUnmount() {
    this._isMounted = false;
    document.removeEventListener("scroll", this.trackScrolling);
  }

  componentDidMount = async () => {
    this._isMounted = true;
    document.addEventListener("scroll", this.trackScrolling);
    let opps = await axios.get(
      "http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c&page=" +
        // this.state.current_page +
        '1'+
        "&per_page=26"
    );
    if (this._isMounted) this.setState({ opps: opps.data.data });
  };

  loadMore = async () => {
    
    if (this._isMounted) {
      this.setState({ current_page: this.state.current_page + 1 });
    
      let opps = await axios.get(
        "http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c&page=" +
          this.state.current_page +
          "&per_page=26"
      );
      this.setState({ opps: [...this.state.opps, ...opps.data.data] });
      // console.log (this.state.opps)

      document.addEventListener("scroll", this.trackScrolling);
      this.setState({ loading: false });
      
    }
  };

  isBottom(el) {
  // console.log((-el.getBoundingClientRect().bottom+200  )% window.innerHeight)
  // console.log(window.innerHeight)
    return ((-el.getBoundingClientRect().bottom+200  ) % window.innerHeight)+100 > window.innerHeight;
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById("scrolled");

    if (this.isBottom(wrappedElement)) {
      this.setState({ loading: true });
      this.loadMore();
      //document.removeEventListener("scroll", this.trackScrolling);
    }
  };

  render() {
    return (
      <div className="App">
        <div id="scrolled">
          <OpportunitiesList className="App" opps={this.state.opps} />
        </div>
      </div>
    );
  }
}

export default App;
