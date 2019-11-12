import React, { Component } from "react";
import API from "../../utils/API"
import "./style.css";
import "../Comment";



class Card extends Component {
    state = {
        comment: "",
<<<<<<< HEAD
        author: this.author
=======
        // userID: 
        // // author: this.author
>>>>>>> master

    }
    componentDidMount() {
        API.getComment()
            .then(res => {
                console.log(res)
                this.setState({
                    comment: res.data
                })
            })
            .catch(err => console.log(err));
    };

    handleFormSubmit = e => {
        e.preventDefault();
        const newComment = {
<<<<<<< HEAD
            author: this.state.author,
            text: this.state.comment,
        }
        console.log(newComment);
        API.createComment(newComment);
        this.setState(
            {
                text: "",
=======
            text: this.state.comment,
        }
        // console.log(newComment);
        API.createComment(newComment);
        this.setState(
            {
                comment: "",
>>>>>>> master
            }
        )
    }

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    };

    render() {
        return (
            <div className="card" >
<<<<<<< HEAD
                <ul>
                    <li>{this.props.title}</li>
                    <li>{this.props.post}</li>
                    <li>{this.props.author}</li>
                    <li>{this.props.category}</li>
=======
                <h1>{this.props.title}</h1>
                <ul>
                    <li>{this.props.post}</li>
                    {/* <li>{this.props.author}</li> */}
                    <li>{this.props.category}</li>
                    <li>{this.props.comments}</li>
>>>>>>> master
                </ul>
                <form>
                    <input
                        name="comment"
                        type="text"
                        // value={this.state.comment}
                        placeholder="Comment here!">
                    </input>
                    <button onClick={this.handleFormSubmit}>Submit!</button>
                </form>

            </div>


        )
    }
}
<<<<<<< HEAD

=======
>>>>>>> master
export default Card