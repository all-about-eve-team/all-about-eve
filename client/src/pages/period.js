import React, { Component } from 'react'
import API from "../utils/API"
import PeriodPostWrapper from "../components/PeriodPostWrapper"

class Period extends Component {
    state = {
        author: this.props.username,
        title: "",
        productCategory: "",
        image: "",
        results: []
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
            title: this.state.title,
            image: this.state.image,
            productCategory: this.state.productCategory
        }

        // connecting to utils to create a post.
        API.createPeriodPost(newPeriodPost);

        this.setState(
            {
                title: "", productCategory: "", image: ""
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
                <PeriodPostWrapper username ={this.state.author} posts={this.state.results}/>
                </div>
            ) : (
                <h1>Login, sweetheart</h1>
            )}
            </div>
        )
    }
}

export default Period;