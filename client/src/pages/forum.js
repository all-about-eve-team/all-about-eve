import React, { Component } from 'react'
import API from "../utils/API"
import Card from '../components/Card';
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles';



class Forum extends Component {
    state = {
        title: "",
        text: "",
        category: "",
        //need this to be user ID > this.props.username.getuser? or something like that?
        author: this.props.username,
        authorid: "",
        submittedQuestion: []
    };

    componentDidMount() {
        console.log(this.state.author)
        // this.props.getUser()
        axios.get('/user/' + this.state.author).then(res => {
            // .then(res=>{
            console.log(res.data._id)
            this.setState({ authorid: res.data._id })
        }).catch(err => console.log(err))
        // console.log(this.state.authorid)

        API.getPost()
            .then(res => {
                console.log(res)
                this.setState({
                    submittedQuestion: res.data
                })
            })
            .catch(err => console.log(err));
    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    };

    handleFormSubmit = e => {
        e.preventDefault();
        
        const newPost = {
            // hardcoding the author to test
            author: this.state.authorid,
            title: this.state.title,
            text: this.state.text,
            category: this.state.category,
        }
        console.log(newPost);
        API.createPost(newPost)
        this.setState(
            {
                title: "",
                text: "",
                category: "",
            }
        )
        // need a way to reload the page with the new post without logging the user out
    }

    render() {
        // const classes = useStyles();
        
        return (
            <div>
                <form>
                    {/* // className={classes.container}
                > */}
                    {/* <div>
                        <TextField
                            id="standard-basic"
                            className={classes.textField}
                            label="Standard"
                            margin="normal"
                        />
                    </div> */}
                    <input
                        name="title"
                        type="text"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        placeholder="Question" />

                    <input
                        name="text"
                        type="text"
                        value={this.state.text}
                        onChange={this.handleInputChange}
                        placeholder="text" />

                    <input
                        name="category"
                        type="text"
                        value={this.state.category}
                        onChange={this.handleInputChange}
                        placeholder="category" />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
                <div>
                    {this.state.submittedQuestion.map(post => (
                        <Card post={post.text}
                            title={post.title}
                            author={post.author}
                            category={post.category}
                            card={Card} />
                    ))}
                </div>
            </div>
        );
    }
}



export default Forum

//for reference:
// app.post("/submit", function(req, res) {
//     // Create a new Note in the db
//     db.Note.create(req.body)
//       .then(function(dbNote) {
//         // If a Note was created successfully, find one User (there's only one) and push the new Note's _id to the User's `notes` array
//         // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
//         // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
//         return db.User.findOneAndUpdate({}, { $push: { notes: dbNote._id } }, { new: true });
//       })
//       .then(function(dbUser) {
//         // If the User was updated successfully, send it back to the client
//         res.json(dbUser);
//       })
//       .catch(function(err) {
//         // If an error occurs, send it back to the client
//         res.json(err);
//       });
//   });