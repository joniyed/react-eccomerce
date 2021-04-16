import React, { useState } from 'react'
import Layout from '../layout/Layout'
import { signup } from '../auth'

const Signup = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value })
    }

    const { name, email, password, error, success } = values;


    const handleSubmit = e => {
        e.preventDefault();
        setValues({ error: false });
        signup({ name, email, password })
            .then(res => {
                if (res.error) {
                    setValues({
                        ...values,
                        error: res.error,
                        success: false
                    })
                } else {
                    setValues({
                        ...values,
                        name: '',
                        email: '',
                        password: '',
                        error: '',
                        success: true
                    })
                }

            })
    }


    const showErrMsg = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    )

    const showSuccess = () => (
        <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
            User created succesfully. Please sign with email and password..
        </div>
    )

    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    type="text"
                    className="form-control"
                    required
                    onChange={handleChange("name")}
                    value={name}
                />
            </div>
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
            title="Sigout Page"
            description="This is signout page"
            className="container col-md-8 offset-md-2"
        >
            {showErrMsg()}
            {showSuccess()}
            {signUpForm()}
        </Layout>
    )
}

export default Signup
