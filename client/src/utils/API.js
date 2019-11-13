import axios from "axios";

export default {
    createPost: function(postData){
        console.log(postData);
        return axios.post("/api/posts", postData);
    },
    getPost: function(){
        return axios.get("/api/posts")
    },
    createPeriodPost: function(postData){
        console.log(postData)
        return axios.post("/api/periodposts", postData)
    },
    getPeriodPost: function(){
        console.log("api get route is getting hit")
        return axios.get("/api/periodposts/")
    },
    createComment: function(postData){
        return axios.post("/api/comments", postData)
    },
    getComment: function(){
        return axios.get("/api/comments")
    },
    updatePost: function(comment){
        console.log(comment.post)
        console.log(comment.text)
        // hardcoding comment id to test
        return axios.put(`/api/posts/${comment.post}`, {comments: "5dcbbadf1430e62a48ea932e"})
    },
    getPostId: function(id){
        console.log(id)
        return axios.get(`/api/posts/${id}`)
    }

}