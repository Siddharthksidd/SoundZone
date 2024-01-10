import React, { useContext } from 'react';
import { BsExclamationCircle } from 'react-icons/bs';
import useDocTitle from '../hooks/useDocTitle';
import FilterBar from '../components/filters/FilterBar';
import ProductCard from '../components/ProductCard';
import Services from '../components/Services';
import filtersContext from '../context/filters/filtersContext';
import EmptyView from '../components/EmptyView';


const AllProducts = () => {

    useDocTitle('All Products');

    const { allProducts } = useContext(filtersContext);


    return (
        <>
            <section id="all_products" className="section">
                <FilterBar />

                <div className="container">
                    {
                        allProducts.length ? (
                            <div className="wrapper products_wrapper">
                                {
                                    allProducts.map(item => (
                                        <ProductCard
                                            key={item.id}
                                            {...item}
                                        />
                                    ))
                                }
                            </div>
                        ) : (
                            <EmptyView
                                icon={<BsExclamationCircle />}
                                msg="No Results Found"
                            />
                        )
                    }
                </div>
            </section>

            <Services />
        </>
    );
};

export default AllProducts;