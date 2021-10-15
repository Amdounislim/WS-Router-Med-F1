import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isAuth, ...props }) => {


    if (!isAuth) {
        return <Redirect to='/' />
    }

    return (
        <div>
            {/* <Route render={() => <Component />} /> */}
            <Component/>
        </div>
    )
}

export default PrivateRoute
