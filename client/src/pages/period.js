import React, { Component } from 'react'
import API from "../utils/API"
import PeriodPostWrapper from "../components/PeriodPostWrapper"

class Period extends Component {
    state = {
        author: this.props.username,
        title: "",
        text: "",
        productCategory: "",
        image: "",
        results: ["test","second entry"]
    };

    componentDidMount() {
        console.log('i got hit')
            API.getPeriodPost()
            .then(res => {
                console.log("then is getting hit")
                console.log(res)
                this.setState({
                    results: res.data
                })
            })
              .catch(err => console.log(err));
    }
    
    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = e => {
        e.preventDefault();

        const newPeriodPost = {
            author: this.state.author,
            title: this.state.title,
            text: this.state.text,
            image: this.state.image,
            productCategory: this.state.productCategory
        }

        // connecting to utils to create a post.
        API.createPeriodPost(newPeriodPost);

        this.setState(
            {
                author: "", title: "", text: "", productCategory: "", image: ""
            }
        )
    }

    render() {
        const loggedIn = this.props.loggedIn;
        return (
            <div>
            { loggedIn ? (
                <div>
                <form>
                    <input
                        name="title"
                        type="text"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        placeholder="title" />
                    <input
                        name="text"
                        type="text"
                        value={this.state.text}
                        onChange={this.handleInputChange}
                        placeholder="text" />
                    <input
                        name="productCategory"
                        type="text"
                        value={this.state.productCategory}
                        onChange={this.handleInputChange}
                        placeholder="productCategory" />
                        <input
                        name="image"
                        type="text"
                        value={this.state.image}
                        onChange={this.handleInputChange}
                        placeholder="image" />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
                <PeriodPostWrapper posts={this.state.results}/>
                </div>
            ) : (
                <h1>Login, sweetheart</h1>
            )}
            </div>
        )
    }
}

export default Period;