import axios from "axios";

export default {
    // user routing
    getUserInfo: function(user){
        return axios.get(`/user/${user}`)
    },
    userLogin: function(postData){
        return axios.post("/user/login", postData)
    },
    userLogout: function(){
        return axios.post("/user/logout")
    },
    userSignup: function(postData){
        return axios.post("/user", postData);
    },
    updateUserPost: function(userid,postid){
        // the postid is currently hardcoded in the forum file unfortnately
        return axios.put(`/user/${userid}`,{posts:postid})
    },
    updateUserComment: function(userid,commentid){
        // the commentid is currently hardcoded in the forum file unfortnately
        return axios.put(`/user/${userid}`,{comments:commentid})
    },
    // forum post routing
    getPost: function(){
        return axios.get("/api/posts")
    },
    createPost: function(postData){
        console.log(postData);
        return axios.post("/api/posts", postData);
    },
    updatePost: function(comment){
        return axios.put(`/api/posts/${comment.post}`, {comments: comment.commentid})
    },
    getPostId: function(id){
        return axios.get(`/api/posts/${id}`)
    },
    // forum comment routing
    createComment: function(postData){
        console.log(postData)
        return axios.post("/api/comments", postData)
    },
    // product post routing
    getProductPost: function(){
        return axios.get("/api/productposts/")
    },
    createProductPost: function(postData){
        return axios.post("/api/productposts/", postData)
    },
    updateProductPost: function(comment){
        return axios.put(`/api/productposts/${comment.post}`, {productComments: comment.commentid})
    },
    getProductPostId: function(id){
        return axios.get(`/api/productposts/${id}`)
    },
    // product comment routing
    createProductComment: function(postData){
        return axios.post("/api/productcomments", postData)
    },
    //article routing 
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