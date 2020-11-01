import React from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import {connect} from 'react-redux';
// import CustomButton from '../custom-button/custom-button.component';
import {currentUser} from '../../redux/user/user.actions'
import Axios from 'axios'
class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
        email:'',
        password:'',
        currentuser:''
        }     
    }
    handleChange=(event)=>{
        
        const {value, name} = event.target;
        
        this.setState({[name]:value})
        
    }
    handleSubmit=async(event)=>{
        event.preventDefault();
        const {email, password}= this.state;
        Axios.post("http://localhost:8000/createsession", 
        {
            email:email,
            password:password
            
        }).then((user)=>{this.setState({currentuser:user.data.user})})
        .catch((err)=>console.log(err));
        alert("Successfully logged in")      
    } 

    
    render(){ 
        return(
            <div className='sign-in'>
                <h2>I already have an acount</h2>
                <span>Sign in with Email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                     handleChange={this.handleChange}
                     label="email" 
                     type="email" 
                     value={this.state.email}
                     name="email" 
                     required
                    />
                    
                    <FormInput 
                    handleChange={this.handleChange}
                     label="password"
                     type="password"
                     value={this.state.password} 
                     name="password" 
                     required 
                    />  
                    <div className='buttons'>
                        <button type="submit" onClick={this.props.currentuser(this.state.currentuser)} >Sign In</button>
                      
                    </div>
                    
                </form> 
            </div>
        )
    }

}

const mapDispatchToProps = dispatch=>({
    currentuser : (currentuser) => dispatch(currentUser(currentuser))
})

export default connect(null,mapDispatchToProps)(SignIn);