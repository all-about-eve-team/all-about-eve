import axios from "axios";

export default {
    getUserInfo: function(user){
        return axios.get(`/user/${user}`)
    },
    userLogin: function(postData){
        return axios.post("/user/login", postData)
    },
    userLogout: function(){
        return axios.post("/user/logout")
    },
    createPost: function(postData){
        console.log(postData);
        return axios.post("/api/posts", postData);
    },
    getPost: function(){
        return axios.get("/api/posts")
    },
    createProductPost: function(postData){
        return axios.post("/api/productposts/", postData)
    },
    getProductPost: function(){
        return axios.get("/api/productposts/")
    },
    updateProductPost: function(comment){
        return axios.put(`/api/productposts/${comment.post}`, {productComments: comment.commentid})
    },
    getProductPostId: function(id){
        return axios.get(`/api/productposts/${id}`)
    },
    createComment: function(postData){
        console.log(postData)
        return axios.post("/api/comments", postData)
    },
    createProductComment: function(postData){
        return axios.post("/api/productcomments", postData)
    },
    updatePost: function(comment){
        return axios.put(`/api/posts/${comment.post}`, {comments: comment.commentid})
    },
    getPostId: function(id){
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
	// Articles Collection
	getArticle: function () {
		console.log("api get route ARTICLES is getting hit");
		return axios.get("/api/articles");
    },
    // Articles matching multiple tags
	getArticleTag: function(tags) {
        //GGRE--> For debugging
		console.log("tags--> ", tags.join(","));
		// return axios.get("/api/articles" + tags);
    }
}