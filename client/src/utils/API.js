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
        console.log(postData)
        return axios.post("/api/comments", postData)
    },
    getComment: function(){
        return axios.get("/api/comments")
    },
    updatePost: function(comment){
        console.log(comment.post)
        console.log(comment.text)
        // hardcoding comment id to test
        return axios.put(`/api/posts/${comment.post}`, {comments: comment.text})
    },
    getPostId: function(id){
        console.log(id)
        return axios.get(`/api/posts/${id}`)
    },
    updateUserPost: function(userid,postid){
        // the postid is currently hardcoded in the forum file unfortnately
        return axios.put(`/user/${userid}`,{posts:postid})
    },
    updateUserComment: function(userid,commentid){
        // the commentid is currently hardcoded in the forum file unfortnately
        return axios.put(`/user/${userid}`,{comments:commentid})
    },
    //	// Tags Collection
	// getTag: function () {
	// 	console.log("api get route TAGS is getting hit");
	// 	//return axios.get("/api/articles");
	// },
	// Articles Collection
	getArticle: function () {
		console.log("api get route ARTICLES is getting hit");
		return axios.get("/api/articles");
	},
}