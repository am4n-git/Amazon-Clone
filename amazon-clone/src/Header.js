import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
    const[{basket, user },dispatch]= useStateValue();
    const handleSignin =()=>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to="/">
            <img className="header_logo" src='https://pngimg.com/uploads/amazon/amazon_PNG25.png' alt="Amazon" />
            </Link>

            <div className="header_search" >
                <input className="header_search_input" type='text' />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className='header_nav'>
                <Link to={!user && '/login'}>
                <div className="header_option" onClick={handleSignin}>
                    <span className="header_option1"> Hello {!user ? 'Guest' : user.email} </span>
                    <span className="header_option2">{user ?'Sign-out' : 'Sign-in'}</span>
                </div>
                </Link>

                <div className="header_option">
                    <span className="header_option1"> Return </span>
                    <span className="header_option2">Orders</span>
                </div>

                <div className="header_option">
                    <span className="header_option1">Your</span>
                    <span className="header_option2">Prime</span>
                </div>

                <Link to="/checkout">
                <div className="header_basket">
                    <ShoppingCartIcon />
                    <span className="header_option2 header_basket_count">{basket?.length}</span>
                </div>
                </Link>

            </div>

        </div>
    )
}

export default Header
