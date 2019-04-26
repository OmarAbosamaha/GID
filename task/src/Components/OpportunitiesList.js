import React, { Component } from "react";
// import { Modal } from "react-bootstrap";
// import { ModalHeader } from "react-bootstrap";
// import { ModalBody } from "react-bootstrap";
// import { ModalFooter } from "react-bootstrap";
import { Button } from "react-bootstrap";
import MediaCard from "./MediaCard";
import Modal from "react-responsive-modal";
import { FormGroup } from "react-bootstrap";
import { Input } from "reactstrap";
import axios from "axios";
export default class OpportunitiesList extends Component {
  state = {
    showModal: false
  };
  getSyle = () => {
    return {
      width: " 300px",
      height: "400px",
      float: "left",
      border: "1px",
      margin: "50px",
      boxShadow:
        " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19)"
    };
  };

  updateOpp = async (id, title, desc) => {
    let res;
    try {
      res = await axios.patch(
        "http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities/" +
          id +
          "?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c",
        {
          title: title,
          description: desc
        }
      );
    } catch {
      console.log(res);
    }
    this.setState({ showModal: false });
  };

  showModalHandler = async () => {
    await this.setState({ showModal: true });
    console.log(this.state.showModal);
  };

  hideModalHandler = () => {
    this.setState({ showModal: false });
  };
  render() {
    let title;
    let desc;
    return this.props.opps.map(opp => (
      <div>
        <div style={this.getSyle()} onClick={() => this.showModalHandler()}>
          <MediaCard key={opp.id} opp={opp} />
          <p> {}</p>
          <p> {}</p>
        </div>
        <Modal
          open={this.state.showModal}
          onClose={() => {
            this.hideModalHandler();
          }}
        >
          <FormGroup>
            <p>Edit Opportunity</p>
            <p>title</p>
            <Input title onChange={e => (title = e.target.value)} />
            <p>{}</p>
            <p>Desc</p>
            <Input description onChange={e => (desc = e.target.value)}>
              {" "}
            </Input>
            <p>{}</p>

            <Button onClick={() => this.updateOpp(opp.id, title, desc)}>
              {" "}
              Edit{" "}
            </Button>
          </FormGroup>
        </Modal>
      </div>
    ));
  }
}
