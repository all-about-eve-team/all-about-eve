import React, { Component } from "react";
import API from "../../utils/API"
import "./style.css";
import "../Comment";



class Card extends Component {
    state = {
        comment: "",
        // userID: 
        // // author: this.author

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
            text: this.state.comment,
        }
        // console.log(newComment);
        API.createComment(newComment);
        this.setState(
            {
                comment: "",
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
                <h1>{this.props.title}</h1>
                <ul>
                    <li>{this.props.post}</li>
                    {/* <li>{this.props.author}</li> */}
                    <li>{this.props.category}</li>
                    <li>{this.props.comments}</li>
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
export default Card