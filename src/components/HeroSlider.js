import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Pagination, Autoplay } from 'swiper';
import productsData from '../data/productsData';
import { displayMoney } from '../helpers/utils';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


const HeroSlider = () => {

    const heroProducts = productsData.filter(item => item.tag === 'hero-product');

    return (
    <Swiper
            modules={[A11y, Pagination, Autoplay]}
            loop={true}
            speed={800}
            spaceBetween={100}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
        >
            {
                heroProducts.map((item, i) => {
                    const { id, title, tagline, heroImage, finalPrice, originalPrice, path } = item;
                    const newPrice = displayMoney(finalPrice);
                    const oldPrice = displayMoney(originalPrice);

                    return (
                        <SwiperSlide
                            key={id}
                        >
                            <div className={`wrapper hero_wrapper hero_slide-${i}`}>
                            <div className="hero_item_txt">
                                <h3>{title}</h3>
                                <h1>{tagline}</h1>
                                <h2 className="hero_price">
                                    {newPrice} &nbsp;
                                    <small><del>{oldPrice}</del></small>
                                </h2>
                                <Link to={`${path}${id}`} className="btn">Shop Now</Link>
                            </div>
                            <figure className="hero_item_img">
                                <img src={heroImage} alt="product-img" />
                            </figure>
                            </div>
                        </SwiperSlide>
                    );
                })
            }
    </Swiper>
    )
}

export default HeroSlider