import React from "react";
import { Redirect , Route } from "react-router-dom";

function ProtectedRoute(props) {
    if (!props.isLoggedIn) {
        return <Redirect to="/" replace />;
    }
    return (
        <Route path={props.path}>
            {props.children}
        </Route>
    );
}

export default ProtectedRoute;