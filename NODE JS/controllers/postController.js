const Post= require('../models/post');
const User = require('../models/user');
const Comment= require('../models/comment')
const Like= require('../models/like')
//create post
module.exports.create= async function(req,res){
   
    try{
        let post= await Post.create({
            content: req.body.content,
            user:req.body.postid
            
        });
        console.log("post added")
        return ;
    
    }catch(err){
        console.log('Error',err);
        return;
    }
   
}

//get all posts
module.exports.getAllPosts= async function(req,res){
    try {
     let posts =await Post.find({})
     .sort('-createdAt')
    .populate('user')
    .populate({
        path:'comments',
        populate:{
            path:'user'
        },
        populate:{
            path:'likes'
        }
        //populate likes for both posts and comments 
    }).populate('likes');

    console.log("i am in post controller",req.user)
    let users= await User.find({});
            
    return res.json(200, {
       
        posts: posts

    })
    
   
    }catch(err){
        console.log('Error',err);
        return;

    }
    
    
        
}