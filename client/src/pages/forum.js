import React, { Component } from 'react'
import API from "../utils/API"
import { Card } from '../components/Card/index';
// import { makeStyles } from '@material-ui/core/styles';
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
        // title: "",
        text: "",
        category: "",
        submittedComment: [],
        categoryArray: []

    };

    handleInputChange = e => {
        // console.log("working");
        // console.log(e.target);
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
 }

    handleFormSubmit = e => {
        e.preventDefault();

        const newPost = {
            text: this.state.text,
            category: this.state.category
        }
        console.log(newPost);
        // axios

        // connecting to utils to create a post.
        let newComments = this.state.submittedComment;
        newComments.unshift(this.state.text);
        let newCategory = this.state.categoryArray;
        newCategory.unshift(this.state.category);
        this.setState({
            submittedComment: newComments,
            categoryArray: newCategory,
            text: "",
            category: "",

        });

        // API.createPost(newPost);


        // this.setState(
        //     {
        //         title: "", text: "", category: ""
        //     }
        // )


    }



    render() {
        // const classes = useStyles();
        return (
            <div>
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

                    {this.state.submittedComment.length ? (
                        <div data-aos="flip-up">
                            {this.state.submittedComment.map(singleComment => (
                                <Card post={singleComment} />
                            ))}</div>
                    ) : null}


                </form>
            </div>
        );
    }
}



export default Forum