import React, { Component } from "react";
import {Modal} from "react-bootstrap"
import {ModalHeader} from "react-bootstrap"
import {ModalBody} from "react-bootstrap"
import {ModalFooter} from "react-bootstrap"
import {Button} from "react-bootstrap"
import MediaCard from "./MediaCard";
import {FormGroup} from "react-bootstrap"
import Axios from "axios";
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

  updateOpp= async (id,title,desc)=>{
      await Axios.patch("http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities/"+id+"?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c",{
          title:title, description:desc
      })
  }

//   showModalHandler= async()=>{
//    await this.setState({showModal:true})
//     console.log (this.state.showModal)
//   }

//   hideModalHandler= ()=>{
//     this.setState({showModal:false})
//   }
  render() {
   if (this.state.showModal)
      return(
      <div class="modal-dialog">
    
       
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Modal Header</h4>
          </div>
          <div class="modal-body">
            <p>Some text in the modal.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
    
      </div> );
    return (this.props.opps.map(opp => (
      <div  style={this.getSyle() } onClick={()=>this.setState({showModal:true})} data-toggle="modal" data-target="#myModal">
        <MediaCard
       
          key={opp.id}
          opp={opp}
          
        />
        <p> {}</p>
        <p> {}</p>
        <div id="myModal" class="modal fade" role="dialog">
</div>
{/*       
<Modal isOpen={this.state.showModal} toggle={()=>this.showModalHandler()}>
        <ModalHeader toggle={this.showModalHandler.bind(this)}>Edit a new Request</ModalHeader>
        <ModalBody>
       
        
          <FormGroup>
            <Label for="accepted">accepted</Label>
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
            }} />
            <h3>ay 7aga</h3>
          </FormGroup>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" >Update Request</Button>{' '}
          <Button color="secondary" >Cancel</Button>
        </ModalFooter>
      </Modal> */}
      </div>
    )));
  }
}
