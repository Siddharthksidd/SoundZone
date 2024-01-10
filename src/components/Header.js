import React, {useContext, useEffect, useState} from 'react'
import { BiSearchAlt } from "react-icons/bi";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { LiaUserAstronautSolid } from "react-icons/lia";
import { TbLogout } from "react-icons/tb";
import {dropdownMenu} from "../data/headerData";
import commonContext from "../context/common/commonContext";
import SearchBar from './SearchBar';
import AccountForm from './AccountForm';
import { Link } from 'react-router-dom';
import cartContext from '../context/cart/cartContext';

const Header = () => {

    const { formUserInfo, toggleForm, toggleSearch, setFormUserInfo } = useContext(commonContext);
    const [isSticky, setIsSticky] = useState(false);

    // handle the sticky-header
    
    useEffect(() => {
        const handleIsSticky = () => window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);

        window.addEventListener('scroll', handleIsSticky);

        return () => {
            window.removeEventListener('scroll', handleIsSticky);
        };
    }, []);

    const { cartItems } = useContext(cartContext);
    const cartQuantity = cartItems.length;


    return (
        <>
            <header id="header" className={isSticky ? 'sticky' : ''} >
                <div className="container">
                    <div className="navbar">
                        <h2 className="logo headericons">
                            <Link to={"/"}>SoundZone</Link>
                        </h2>
                        <nav className="nav_btns">
                            <div className="search_btn">
                                <span onClick={
                                        () => toggleSearch(true)
                                        }>
                                        <BiSearchAlt className='headericons' />
                                </span>
                                <div className="tooltip">Search</div>
                            </div>
                            <div className="cart_btn">
                                <Link to="/cart">
                                <LiaShoppingCartSolid  className='headericons'/>
                                {
                                        cartQuantity > 0 && (
                                        <span className="badge">{cartQuantity}</span>
                                        )
                                }
                                </Link>
                                <div className="tooltip">Cart</div>
                            </div>
                            <div className="user_btn">
                                <LiaUserAstronautSolid className='headericons' />
                                <div className="dropdown_menu">
                                    <h4>Hello!
                                        {formUserInfo && <span>&nbsp;{formUserInfo}</span>}
                                    </h4>
                                    <p>Access account and manage orders</p>
                                    {
                                        !formUserInfo ? (
                                            <button
                                                type="button"
                                                onClick={() => toggleForm(true)}
                                            >
                                                Login / Signup
                                            </button>
                                        ):
                                        (
                                            <button
                                                type="button"
                                                onClick={() => setFormUserInfo("")}
                                            >
                                                Logout &nbsp; <TbLogout />
                                            </button>
                                        )
                                    }
                                    <div className="separator"></div>
                                    <ul>
                                        {
                                            dropdownMenu.map(item => {
                                                const { id, link, path } = item;
                                                return (
                                                    <li key={id}>
                                                        <Link to={path}>
                                                        {link}
                                                        </Link>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            <SearchBar />
            <AccountForm />

        </>
    )
}



export default Header