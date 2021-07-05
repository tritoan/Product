import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import { Link } from 'react-router-dom';
import ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {

    const [{basket}, dispatch] = useStateValue();
    // console.log(basket)
    return (
        <div>
             <nav className="header">
                <img className="header_logo" src="" alt="logo" src="./img/logo.png" />
                <div className="header_search">
                    <input type="text" className="header_searchInput" />
                    <SearchIcon className="hearder_searchIcon"/>
                </div>
                 <div className="header_nav">
                        {/* Link 1 */}
                    <Link to="/" className="hearder_link">
                        <div className="header_option">
                            <span className="header_optionLine1">Hello, User</span>
                            <span className="header_optionLine2">Sign In</span>
                        </div>
                    </Link>
                    {/* Link 2 */}
                    <Link to="/" className="hearder_link">
                        <div className="header_option">
                            <span className="header_optionLine1">Return</span>
                            <span className="header_optionLine2">& Order</span>
                        </div>
                    </Link>
                    {/* Link 3
                    <Link to="/" className="hearder_link">
                        <div className="header_option">
                            <span className="header_optionLine1">You</span>
                            <span className="header_optionLine2">Prime</span>
                        </div>
                    </Link> */}
                </div>
                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo header_productCount">{basket?.length}</span>
                    </div>
                </Link>
                
                
            </nav>
        </div>
    );
}

export default Header;