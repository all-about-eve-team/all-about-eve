import React, { Component } from 'react'
import API from "../utils/API"
import { Card } from '../components/Card/index';
import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles(theme => ({

//     container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     textField: {
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),
//         width: 200,
//     },
// }));


class Forum extends Component {
    state = {
        title: "",
        text: "",
        category: "",
        author: this.props.username,
        submittedQuestion: [],
        // categoryArray: []
        

    };

    // console.log("author: "+ author);
    

    componentDidMount() {
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
        // console.log("working");
        // console.log(e.target);
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    };

    handleFormSubmit = e => {
        e.preventDefault();

        const newPost = { 
            author: this.state.author,
            title: this.state.title,
            text: this.state.text,
            category: this.state.category,
            
        
        }
        console.log(newPost);
        // axios

        // connecting to utils to create a post.
        // let newQuestion = this.state.submittedQuestion;
        // newQuestion.unshift(this.state.text);
        // let newCategory = this.state.categoryArray;
        // newCategory.unshift(this.state.category);
        // this.setState({
        //     submittedQuestion: newQuestion,
        //     categoryArray: newCategory,
        //     text: "",
        //     category: "",

        // });

        API.createPost(newPost);


        this.setState(
            {
                title: "",
                text: "",
                category: ""
            }
        )


    }



    render() {
        // const classes = useStyles();
        return (
            <div>
                testing{this.props.username}
                <form
                // className={classes.container}

                >
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
                                title = {post.title} 
                                author={post.author}
                                category={post.category}/>
                            ))}
                            </div>
                 
               
            </div>
        );
    }
}



export default Forum