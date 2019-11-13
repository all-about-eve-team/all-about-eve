import axios from "axios";

export default {
	createPost: function (postData) {
		console.log(postData);
		return axios.post("/api/posts", postData);
	},
	getPost: function () {
		return axios.get("/api/posts")
	},
	createPeriodPost: function (postData) {
		console.log(postData)
		return axios.post("/api/periodposts", postData)
	},
	getPeriodPost: function () {
		console.log("api get route is getting hit")
		return axios.get("/api/periodposts/")
	},
	createComment: function (postData) {
		return axios.post("/api/comments", postData)
	},
	getComment: function () {
		return axios.get("/api/comments")
	},
	// Articles Collection
	getArticle: function () {
		console.log("api get route ARTICLES is getting hit");
		return axios.get("/api/articles");
	}

}