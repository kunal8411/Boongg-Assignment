import React from "react";
import {createStructuredSelector} from 'reselect';
import Axios from 'axios'
import {connect} from 'react-redux';

import  {selectCurrentUser} from '../../redux/user/user.selectors'
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
function PostHeader({  user,date }) {
  
  return (
    <div className="post-header">
      {/* <img className="avatar" src={author.avatar} alt="avatar"/> */}
      <div className="details">
        <span>{user.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <div className="post-comments">
      <div className="divider" />
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          {/* <img className="avatar" src={comment.author.avatar} alt="avatar"/> */}
          <p>
            {/* <span>{comment.author.name}</span> */}
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}

class PostItem extends React.Component {
  constructor(){
    super();
    this.state={
      comment:'',
      likes:0
    }
  }
  handleChange=(event)=>{
    this.setState({comment:event.target.value});
    console.log(this.state.comment);
  }
  onSubmit=(event)=>{
     
    Axios.post("http://localhost:8000/createcommment",{
        content:this.state.comment,
        post:this.props._id,
        user:this.props.currentUser
    });
    alert("Comments Added Successfully");
  }
  addLikes=()=>{
    this.setState({likes:this.state.likes+1})
  }
  render(){
    console.log("value of key is",this.props._id)
    console.log("current user in post item controller",this.props.currentUser)
    return (
      <div className="post">
        <PostHeader  date={this.props.createdAt} user={this.props.user} />
        <p className="post-content">{this.props.content}</p>
        <PostComments comments={this.props.comments} />
      <form>
        <div class="form-group">
        <label for="comment">Comment:</label>
        <textarea class="form-control" rows="5" id="comment" onChange={this.handleChange}></textarea>
        </div>
      </form> 
        <div className="n-actions">
                <div>
                  <div className="glyphicon glyphicon-thumbs-up" style={{marginRight:'10px'}}>
                    
                  </div>   
                  <button onClick={this.addLikes}>  {this.state.likes} Like </button>
                </div>

                <div>
                  <div className="glyphicon glyphicon-comment" style={{marginRight:'10px'}}></div>
                  <button onClick={this.onSubmit}> Comment</button>
                </div>
                
       </div>
        
      </div>
      
    );
  }
  
}

const mapStateToProps =createStructuredSelector({
  currentUser:selectCurrentUser
})

export default connect(mapStateToProps)(PostItem);