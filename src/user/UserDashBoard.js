import React from 'react'
import Layout from '../layout/Layout'
import { isAuthenticated } from '../auth'
import { Link } from 'react-router-dom';

const UserDashBoard = () => {

    const {
        user: {
            name,
            email,
            role
        }
    } = isAuthenticated();

    const userLink = () => {
        return (
            <div className="card">
                <h4 className="card-header">User Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/cart">My Cart</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/profile/update">Update Profile</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const userProfile = () => {
        return (
            <div className="card mb-5">
                <h1 className='card-header'>User Info</h1>
                <ul className="list-group">
                    <li className="list-group-item">Name:{name}</li>
                    <li className="list-group-item">Email:{email}</li>
                    <li className="list-group-item">Role:{role === 1 ? 'Admin' : 'User'}</li>
                </ul>
            </div>
        )
    }

    const userHistory = () => {
        return (
            <div className="card mb-5">
                <h1 className='card-header'>Purcahse History</h1>
                <ul className="list-group">
                    <li className="list-group-item">history</li>
                </ul>
            </div>
        )
    }

    return (
        <Layout title="DashBoard" description="User DashBoard" className="container">
            <div className="row">
                <div className="col-3">
                    {userLink()}
                </div>
                <div className="col-9">
                    {userProfile()}
                    {userHistory()}
                </div>
            </div>
        </Layout>
    )
}

export default UserDashBoard
