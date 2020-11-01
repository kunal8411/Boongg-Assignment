import React from 'react';
import {Link} from 'react-router-dom'
import Axios from 'axios';


import './header.styles.scss';

import {ReactComponent as Logo} from '../../assets/crown.svg';




class Header extends React.Component{
    onSubmit=()=>{
        Axios.get("http://localhost:8000/signout");

    }
    render(){
        return(
            <div className="header">
                <Link className='logo-container' to="">
                    <Logo className='logo' />
                </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                <Link className='option' to='/signin'> SIGN IN</Link>
                <Link className='option' to='/signin' >
                    <button onClick={this.onSubmit}>
                    SIGN OUT
                    </button>
                 </Link>
               
            </div>
            
            </div>
        )
    }
}







export default Header;