import React, { useEffect, useState } from 'react';
import { isAuthenticated } from '../auth';
import Layout from '../layout/Layout'
import { createProduct, getCategory } from './ApiRequestAdmin'

const AddCategory = () => {

    const [values, setValues] = useState({
        photo: '',
        name: '',
        description: '',
        price: '',
        quantity: '',
        categories: [],
        category: '',
        shipping: '',
        error: '',
        loading: false,
        redirectToProfile: false,
        success: false,
        formData: ''
    });

    const {
        name,
        description,
        price,
        quantity,
        categories,
        category,
        shipping,
        error,
        loading,
        redirectToProfile,
        success,
        formData,
    } = values;

    const { user, token } = isAuthenticated();


    const init = () => {
        getCategory().
            then(res => {
                if (res && res.error) {
                    setValues({ ...values, error: res.error })
                } else if (res) {
                    setValues({ ...values, categories: res.categories, formData: new FormData() });
                } else {
                    setValues({ ...values, error: "Something went wrong." })
                }
            })
    }

    useEffect(() => {
        init();
    }, []);

    const handleChanged = name => e => {
        e.preventDefault();
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        formData.set(name, value);
        setValues({
            ...values,
            [name]: value,
            error: '',
            success: false
        });
    }

    const clickSubmit = e => {
        e.preventDefault();
        setValues({ ...values, loading: true });
        createProduct(token, user._id, formData)
            .then(res => {
                if (res && res.error) {
                    setValues({ ...values, error: res.error, loading: false, success: false })
                } else if (res) {
                    setValues({
                        ...values,
                        photo: '',
                        name: '',
                        description: '',
                        price: '',
                        quantity: '',
                        categories: [],
                        category: '',
                        shipping: '',
                        error: '',
                        loading: false,
                        redirectToProfile: false,
                        success: true,
                    });
                } else {
                    setValues({ ...values, error: "Somethign went wrong..", loading: false, success: false });
                }
            })
    }



    const addProductForm = () => {
        return (
            <form className="mb-3" onSubmit={clickSubmit}>
                <div className="form-group">
                    <h2>Choose Photo</h2>
                    <label className="btn btn-primary">
                        <input
                            type="file"
                            name="photo"
                            accept="image/*"
                            onChange={handleChanged('photo')}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label className="text-muted">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={handleChanged('name')}
                    />
                </div>
                <div className="form-group">
                    <label className="text-muted">Description</label>
                    <textarea
                        className="form-control"
                        value={description}
                        onChange={handleChanged('description')}
                    />
                </div>

                <div className="form-group">
                    <label className="text-muted">Price</label>
                    <input
                        className="form-control"
                        type="number"
                        onChange={handleChanged('price')}
                        value={price}
                    />
                </div>

                <div className="form-group">
                    <label className="text-muted">Quantity</label>
                    <input
                        className="form-control"
                        type="number"
                        onChange={handleChanged("quantity")}
                        value={quantity}
                    />
                </div>

                <div className="form-group">
                    <label className="text-muted">Category</label>
                    <select
                        className="form-control"
                        onChange={handleChanged('category')}
                    >
                        <option>Select Category</option>
                        {categories && categories.map((c, i) => (
                            <option key={i} value={c._id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label className="text-muted">Shipping</label>
                    <select
                        className="form-control"
                        onChange={handleChanged("shipping")}
                        value={shipping}
                    >
                        <option>Select Shipping</option>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </select>
                </div>

                <button className="btn btn-primary">
                    Add Product
                </button>

            </form>
        )
    }


    const showError = () => {
        return (
            error && <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>{error}</div>
        );
    }

    const showSuccess = () => {
        return (
            success && <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>Product Successfully Created..</div>
        );
    }


    const showLoading = () => {
        return (
            loading && <div className="alert alert-success" style={{ display: loading ? '' : 'none' }}>Loading..</div>
        );
    }

    return (
        <Layout
            title="Add Product"
            description="Add new Product"
        >
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showError()}
                    {showSuccess()}
                    {showLoading()}
                    {addProductForm()}
                </div>
            </div>

        </Layout>
    )
}

export default AddCategory;
