const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports.create= async function(req,res){

    try{
        let post= await Post.findById(req.body.post); 
        if(post){
            let comment=await Comment.create({
                content: req.body.content,
                post: req.body.post,
                user:req.body.user
    
            });
                post.comments.push(comment);
                post.save();
                
                comment=await comment.populate('user','name email').execPopulate();

                console.log('comment published');
                res.redirect('/');    
        }
    }catch(err){
        console.log('Error',err);
        return;
    }
   
    
  
}
