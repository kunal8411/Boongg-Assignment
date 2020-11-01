import React, { Component } from "react";
import PostForm from '../postForm/postForm.component'
import PostItem from "../postItem/postitem.component";

class PostList extends Component {
  state = {
    posts: []
     
    
  }; 
  componentDidMount(){
    
    const url ="http://localhost:8000/getAllPosts"
    
    fetch(url)
    .then(response=> response.json())
    .then((posts)=>this.setState({posts:posts.posts}))
  }
  render() {
    const { posts } = this.state;
    console.log("post coming are",posts)
    return (
      <div className="postlist">
        <PostForm/>
        {posts.map(post => (
          <PostItem key={post._id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;