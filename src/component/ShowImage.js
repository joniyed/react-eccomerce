import React from 'react';
import { PROUDUCT_URL } from '../config/Config';

const ShowImage = ({ id, name }) => {
    const imgUrl = `${PROUDUCT_URL}/get/photo/${id}`
    return (
        <div className='product-img'>
            <img
                src={imgUrl}
                alt={name}
                className="mb-3"
                style={{ maxHeight: "200px", maxWidth: "200px" }}
            />
        </div>
    )
}

export default ShowImage
