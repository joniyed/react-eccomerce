import React, { useState } from 'react';
import { isAuthenticated } from '../auth';
import Layout from '../layout/Layout'
import { createCategory } from './ApiRequestAdmin';

const AddCategory = () => {

    const [name, setName] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const { user, token } = isAuthenticated();

    const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
        setError('');
        setSuccess(false);
    }

    const handleSubmit = e => {
        e.preventDefault();
        createCategory(token, user._id, { name })
            .then(res => {
                if (res && res.error) {
                    setError(res.error);
                } else if (res) {
                    setError(false);
                    setSuccess(true);
                    setName('');
                } else {
                    setError(true);
                    setSuccess(false);
                }
            });
    }

    const showSuccess = () => {
        return success && <h1 className="alert-success">Category successfully created.</h1>
    }

    const showError = () => {
        return error && <h1 className="alert-danger">Failed to create category..</h1>
    }


    const addCategoryForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="form-muted">Name</label>
                <input
                    className="form-control"
                    type="text"
                    onChange={handleChange}
                    autoFocus
                    value={name}
                />
            </div>
            <button className="btn btn-primary">
                Add Category
            </button>
        </form >
    )


    return (
        <Layout
            title="Add Category"
            description="Add new Category"
        >
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showSuccess()}
                    {showError()}
                    {addCategoryForm()}
                </div>
            </div>

        </Layout>
    )
}

export default AddCategory;
