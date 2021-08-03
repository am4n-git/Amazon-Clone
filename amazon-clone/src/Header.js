import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <div className='header'>

            <img className="header_logo" src='https://pngimg.com/uploads/amazon/amazon_PNG25.png' alt="Amazon" />

            <div className="header_search" >
                <input className="header_search_input" type='text' />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className='header_nav'>

                <div className="header_option">
                    <span className="header_option1"> Hello User </span>
                    <span className="header_option2">Sign In</span>
                </div>

                <div className="header_option">
                    <span className="header_option1"> Return </span>
                    <span className="header_option2">Orders</span>
                </div>

                <div className="header_option">
                    <span className="header_option1">Your</span>
                    <span className="header_option2">Prime</span>
                </div>

                <div className="header_basket">
                    <ShoppingCartIcon />
                    <span className="header_option2 header_basket_count">0</span>
                </div>

            </div>

        </div>
    )
}

export default Header
