import React, { useContext, useState } from 'react';
import { PiStarFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { displayMoney } from '../helpers/utils';
import cartContext from '../context/cart/cartContext';
import useActive from '../hooks/useActive';
import ReactiveButton from 'reactive-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { MdDone } from "react-icons/md";



const ProductCard = (props) => {

    const { id, images, title, info, finalPrice, originalPrice, rateCount, path } = props;

    const { addItem } = useContext(cartContext);
    const { active, handleActive, activeClass } = useActive(false);


    // handling Add-to-cart
    const handleAddItem = () => {
        const item = { ...props };
        addItem(item);

        handleActive(id);

        setTimeout(() => {
            handleActive(false);
        }, 2000);
    };

    const newPrice = displayMoney(finalPrice);
    const oldPrice = displayMoney(originalPrice);


    // reactive btn
    const [state, setState] = useState('idle');

    const onClickHandler = () => {
        setState('loading');
        handleAddItem();
        setTimeout(() => {
        setState('success');
        }, 800);
    };


    return (
        <>
            <div className="card products_card">
                <figure className="products_img">
                    <Link to={`${path}${id}`}>
                        <img src={images[0]} alt="product-img" />
                    </Link>
                </figure>
                <div className="products_details">
                    <span className="rating_star">
                        {
                            [...Array(rateCount)].map((_, i) => <PiStarFill key={i}/>)
                        }
                    </span>
                    <h3 className="products_title">
                        <Link to={`${path}${id}`}>{title}</Link>
                    </h3>
                    <h5 className="products_info">{info}</h5>
                    <div className="separator"></div>
                    <h2 className="products_price">
                        {newPrice} &nbsp;
                        <small><del>{oldPrice}</del></small>
                    </h2>
                    <ReactiveButton
                        buttonState={state}
                        onClick={onClickHandler}
                        idleText={active ? 'Added' : 'Add to cart'}
                        loadingText={
                            <>
                            <FontAwesomeIcon icon={faCircleNotch} spin /> Adding...
                            </>
                        }
                        successText={
                        <>
                        <MdDone />&nbsp;
                        Added
                        </>}
                        className={`btn products_btn ${activeClass(id)}`}
                        style={{
                            borderRadius: '5px'
                            
                        }}
                        
                        messageDuration={1500} 
                        animation={false}
                        />
                </div>
            </div>
        </>
    );
};

export default ProductCard;