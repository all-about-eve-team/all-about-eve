import React, { Component } from "react"
import Form from "../components/Form"
import axios from "axios"
import ("./contact.css")

class ContactUs extends Component {

    state={
        name:"",
        company:"",
        email:"",
        phone:"",
        message:""

    }
handleOnChange = (event) =>{
    const {name,value}=event.target
    this.setState({
        [name]:value
    })
console.log(name, value);
}
handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
}
    render() {
        return (
            <Form />
            <Container fluid>
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
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Contact All About Eve</h1>
            </Jumbotron>
            {this.state.message.length ? (
              <List>
                {this.state.message.map(message => {
                  return (
                    <ListItem key={message._id}>
                      <a href={"/message/" + message._id}>
                        <strong>
                          {message.title} by {book.author}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>

        );
    }
}
export default ContactUs;
