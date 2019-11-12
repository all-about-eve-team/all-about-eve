import React, { Component } from "react";
import API from "../../utils/API"
import "./style.css";
import "../Comment";



class Card extends Component {
    state = {
        comment: "",
        author: this.author

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
            author: this.state.author,
            text: this.state.comment,
        }
        console.log(newComment);
        API.createComment(newComment);
        this.setState(
            {
                text: "",
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
                <ul>
                    <li>{this.props.title}</li>
                    <li>{this.props.post}</li>
                    <li>{this.props.author}</li>
                    <li>{this.props.category}</li>
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