import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import { getProduct } from './ApiProduct';
import Card from './Card';

const Home = () => {

    const [productBySell, setProductBySell] = useState([]);
    const [productByArrival, setProductByArrival] = useState([]);
    const [error, setError] = useState(false);

    const getProductListBySold = () => {
        getProduct('sold')
            .then(res => {
                if (res && res.error) {
                    setError(res.error);
                } else if (res) {
                    setError(false);
                    setProductBySell(res.productList);
                } else {
                    setError('Something went wrong');
                }
            })
    }
    const getProductListByArrival = () => {
        getProduct('createdAt')
            .then(res => {
                if (res && res.error) {
                    setError(res.error);
                } else if (res) {
                    setError(false);
                    setProductByArrival(res.productList);
                } else {
                    setError('Something went wrong');
                }
            })
    }

    const showError = () => {
        return error && <div className="alert alert-danger">{error}</div>
    }

    useEffect(() => {
        getProductListBySold();
        getProductListByArrival();
    }, [])


    return (
        <Layout
            title="Home"
            description="Home page"
        >

            {showError()};
            <label className='alert'>New Product</label>
            <div className='row m-2'>
                {productByArrival.map((product, index) => {
                    return <Card key={index} product={product} />
                })}
            </div>
            <label className='alert'>Best Seller</label>
            <div className='row m-2'>
                {productBySell.map((product, index) => {
                    return <Card key={index} product={product} />
                })}
            </div>
        </Layout>
    )
}

export default Home
