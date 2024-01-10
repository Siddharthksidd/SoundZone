import React from 'react';
import { PiStarFill } from "react-icons/pi";

const ProductReviews = (props) => {

    const { name, date, review, rateCount } = props;

    return (
        <>
            <li>
                <div className="user_info">
                    <img src="https://th.bing.com/th/id/OIP.bJpr9jpclIkXQT-hkkb1KQAAAA?rs=1&pid=ImgDetMain" alt="user-img" />
                    <div>
                        <h4>{name}</h4>
                        <div className="user_ratings">
                            <span className="rating_star">
                                {
                                    [...Array(rateCount)].map((_, i) => <PiStarFill key={i}/>)
                                }
                            </span>
                            <span>|</span>
                            <span className="date">{date}</span>
                        </div>
                    </div>
                </div>
                <p className="user_review">{review}</p>
            </li>
        </>
    );
};

export default ProductReviews;