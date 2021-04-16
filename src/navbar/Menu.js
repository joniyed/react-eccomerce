import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth'
const Menu = ({ history }) => {

    const isActive = (history, path) => {
        if (history.location.pathname === path) {
            return { color: 'black', fontWeight: 'bold' }
        } else {
            return { color: 'white' };
        }
    }

    return (
        <ul className="nav nav-tab bg-primary">
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
            </li>

            {!isAuthenticated() && (
                <Fragment>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/signin')} to="/signin">SignIn</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/signup')} to="/signup">SignUp</Link>
                    </li>
                </Fragment>)
            }

            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, '/user/dashboard')} to="/user/dashboard">Dashboard</Link>
                </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, '/admin/dashboard')} to="/admin/dashboard">Dashboard</Link>
                </li>
            )}

            {isAuthenticated() && (
                <Fragment>
                    <li className="nav-item">
                        <span
                            className="nav-link"
                            style={{ cursor: 'pointer', color: 'white' }}
                            onClick={() => signout(() => { history.push('/') })}
                        >
                            SignOut
                    </span>
                    </li>
                </Fragment>
            )}
        </ul>
    )
}

export default withRouter(Menu)
