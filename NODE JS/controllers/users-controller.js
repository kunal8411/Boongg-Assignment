const User= require('../models/user');
const router = require('../routes');
module.exports.postUsers= function(req,res){
    console.log("post request",req.body.email);
    
}


module.exports.create= function(req,res){
    if(req.body.password != req.body.confirmPassword){
        console.log("password are not matching")

    }  

    User.findOne({email: req.body.email},function(err,user){
        if(err){
            console.log('error finding in user in sign up');
            return; 
     
        }
        if(!user){
            var name=req.body.displayName;
            var email=req.body.email;
            var password= req.body.password;
            User.create({email:email, password:password,name:name}, function(err,user){
                if (err){console.log('error in creating user while signing up');  return }

                console.log("user added successfully")
                return; 
            })
        }
        else{
            console.log("user aalready present")
            return ; 
            
        }
    });

}

module.exports.creteSession= function(req,res){
    // console.log("I am in users controller",req.user.id)
    console.log('Logged in Successfully');
    return res.json(200,{
        user:req.user.id
    });
     
}

//test purpose
module.exports.getHomepage=function(req,res){
    return res.render('home')
}

//sign-out controller
module.exports.destroySession= function(req,res){
    //this is by default method provided by passoport 
    req.logout();
    console.log('Logged out Successfully');
    return res.redirect('/');
}
