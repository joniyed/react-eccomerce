import React from 'react'
import Layout from '../layout/Layout'
import { isAuthenticated } from '../auth'
import { Link } from 'react-router-dom';

const AdminDashBoard = () => {

    const {
        user: {
            name,
            email,
            role
        }
    } = isAuthenticated();

    const adminLink = () => {
        return (
            <div className="card">
                <h4 className="card-header">Admin Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/category">Create Category</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/product">Create Product</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const adminProfile = () => {
        return (
            <div className="card mb-5">
                <h1 className='card-header'>Admin Info</h1>
                <ul className="list-group">
                    <li className="list-group-item">Name:{name}</li>
                    <li className="list-group-item">Email:{email}</li>
                    <li className="list-group-item">Role:{role === 1 ? 'Admin' : 'User'}</li>
                </ul>
            </div>
        )
    }

    return (
        <Layout title="DashBoard" description="Admin DashBoard" className="container">
            <div className="row">
                <div className="col-3">
                    {adminLink()}
                </div>
                <div className="col-9">
                    {adminProfile()}
                </div>
            </div>
        </Layout>
    )
}

export default AdminDashBoard
