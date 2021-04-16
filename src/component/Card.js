import React from 'react';
import { Link } from 'react-router-dom';
import ShowImage from './ShowImage';


const Card = (product) => {

    const p = product.product;


    return (
        <div className="col-4 mb-3">
            <div className="card">
                <div className="card-header">
                    {p.name}
                </div>
                <div className="card-body">
                    <ShowImage id={p._id} name={p.name} />
                    <p>{p.description}</p>
                    <p>{p.price} TK</p>
                    <Link to="/">
                        <button className="btn btn-primary btn-sm m-1">
                            View Product
                        </button>
                        <button className="btn btn-warning btn-sm m-1">
                            View Product
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card
