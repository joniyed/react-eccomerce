import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import Signup from './user/Signup';
import Signin from './user/Signin';
import PrivateRoute from './auth/PrivateRoute';
import DashBoard from './user/UserDashBoard';
import AdminRoute from './auth/AdminRoute';
import AdminDashBoard from './admin/AdminDashboard';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/signin'} component={Signin} />
                <Route exact path={'/signup'} component={Signup} />
                <PrivateRoute exact path={'/user/dashboard'} component={DashBoard} />
                <AdminRoute exact path={'/admin/dashboard'} component={AdminDashBoard} />
                <AdminRoute exact path={'/create/category'} component={AddCategory} />
                <AdminRoute exact path={'/create/product'} component={AddProduct} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
