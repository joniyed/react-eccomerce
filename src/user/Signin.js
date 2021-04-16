import React, { useState } from 'react'
import Layout from '../layout/Layout'
import { signin, authenticate, isAuthenticated } from '../auth'
import { Redirect } from 'react-router'

const Signin = () => {

    const { user } = isAuthenticated();

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        redirectRefference: false,
        loading: false
    })

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value })
    }

    const { email, password, error, redirectRefference, loading } = values;


    const handleSubmit = e => {
        e.preventDefault();

        setValues({ ...values, error: false, loading: true });
        signin({ email, password })
            .then(res => {
                if (res.error) {
                    setValues({
                        ...values,
                        error: res.error,
                        loading: false
                    })
                } else {
                    authenticate(res, () => {
                        setValues({
                            ...values,
                            redirectRefference: true
                        })
                    });
                }

            })
    }


    const showErrMsg = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    )

    const showLoading = () => (
        loading && (
            <div className="alert alert-info">
                Loading...
            </div>
        )
    )

    const rediterctTo = () => {
        if (redirectRefference) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />
            } else {
                return <Redirect to="/user/dashboard" />
            }
        }
    }

    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input
                    type="email"
                    className="form-control"
                    required
                    onChange={handleChange("email")}
                    value={email}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input
                    type="password"
                    className="form-control"
                    required
                    onChange={handleChange("password")}
                    value={password}
                />
            </div>

            <button onClick={handleSubmit} className="btn btn-primary">
                Submit
            </button>

        </form>
    )


    return (
        <Layout
            title="Signin Page"
            description="This is signin page"
            className="container col-md-8 offset-md-2"
        >
            {showLoading()}
            {showErrMsg()}
            {signUpForm()}
            {rediterctTo()}
        </Layout>
    )
}

export default Signin
