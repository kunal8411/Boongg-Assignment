

import React from 'react';
import Axios from 'axios';

import {createStructuredSelector} from 'reselect';

import {connect} from 'react-redux';

import  {selectCurrentUser} from '../../redux/user/user.selectors'



class PostForm extends React.Component{
    constructor(){
        super();
        this.state={
            post:''
        }
    }
    onSubmit=(event)=>{
        Axios.post("http://localhost:8000/createpost",{
            content:this.state.post,
            postid:this.props.currentUser
        });
        alert("Post Added successfully");
    }
    handleChange=(event)=>{
        this.setState({post:event.target.value});
        console.log(this.state.post);
    }
    render(){
        // console.log("current user in post form controller",this.props.currentUser)
        return(
            <div className="n-post-card">
          <span><h3>Compose Post</h3></span>
          <div className="form-group">
            <textarea className="form-control" rows="5" id="comment" onChange={this.handleChange}></textarea>
          </div>
          <button className="btn btn-primary" type="button" onClick={this.onSubmit}>
              Post 
          </button>
        </div>
        )
    }
}

const mapStateToProps =createStructuredSelector({
    currentUser:selectCurrentUser
})

export default connect(mapStateToProps)(PostForm);