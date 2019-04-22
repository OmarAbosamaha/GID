import React, { Component } from "react";
import {Modal} from "react-bootstrap"
import {ModalHeader} from "react-bootstrap"
import {ModalBody} from "react-bootstrap"
import {ModalFooter} from "react-bootstrap"
import {Button} from "react-bootstrap"
import MediaCard from "./MediaCard";
import {FormGroup} from "react-bootstrap"
export default class OpportunitiesList extends Component {
  state={
    showModal:false
  }
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


  showModalHandler= async()=>{
   await this.setState({showModal:true})
    console.log (this.state.showModal)
  }

  hideModalHandler= ()=>{
    this.setState({showModal:false})
  }
  render() {
   
    return (this.props.opps.map(opp => (
      <div onClick={()=>this.showModalHandler()} style={this.getSyle()}>
        <MediaCard
          key={opp.id}
          opp={opp}
           
        />
        <p> {}</p>
        <p> {}</p>
      
<Modal isOpen={this.state.showModal} toggle={()=>this.showModalHandler()}>
        {/* <ModalHeader toggle={this.showModalHandler.bind(this)}>Edit a new Request</ModalHeader> */}
        <ModalBody>
       
        
          <FormGroup>
            {/* <Label for="accepted">accepted</Label>
            <Input id="accepted" value={this.state.editRequestData.accepted} onChange={(e) => {
              let { editRequestData } = this.state;

              editRequestData.accepted = e.target.value;

              this.setState({ editRequestData });
            }} />
             <Label for="feedback">feedback</Label>
            <Input id="feedback" value={this.state.editRequestData.feedback} onChange={(e) => {
              let { editRequestData } = this.state;

              editRequestData.feedback = e.target.value;

              this.setState({ editRequestData });
            }} /> */}
            <h3>ay 7aga</h3>
          </FormGroup>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" >Update Request</Button>{' '}
          <Button color="secondary" >Cancel</Button>
        </ModalFooter>
      </Modal>
      </div>
    )));
  }
}
