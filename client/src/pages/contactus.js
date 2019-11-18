import React, { Component } from "react"
import Form from "../components/Form"
import "./contact.css"
import API from "../utils/API"

class ContactUs extends Component {

    state={
        name:"",
        company:"",
        email:"",
        phone:"",
        message:""

    }
handleInputChange = (event) =>{
    const {name,value}=event.target
    this.setState({
        [name]:value
    })
}
handleFormSubmit = event => {
    event.preventDefault();
    
   API.emailPost(this.state)
    .then(response => console.log (response))
    .catch(error => console.log (error));
    
}
    render() {
        return (
          <div>
            <Form 
            handleInputChange={this.handleInputChange} 
            handleFormSubmit={this.handleFormSubmit}
            />

            {/* <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Contact All About Eve </h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                value={this.state.company}
                onChange={this.handleInputChange}
                name="company"
                placeholder="Company (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
              <Input
                value={this.state.phone}
                onChange={this.handleInputChange}
                name="phone"
                placeholder="Phone (required)"
              />
              <Input
                value={this.state.company}
                onChange={this.handleInputChange}
                name="company"
                placeholder="Company (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.company)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container> */}
</div>
        );
    }
}
export default ContactUs;
