import React, { useState } from 'react';
import { isAuthenticated } from '../auth';
import Layout from '../layout/Layout'

const AddCategory = () => {

    const { user, token } = isAuthenticated();

    return (
        <Layout
            title="Add Product"
            description="Add new Product"
        >
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    ....
                </div>
            </div>

        </Layout>
    )
}

export default AddCategory;
