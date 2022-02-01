import React from "react";
import { Route, Navigate } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {

    const isAuthenticated = localStorage.getItem("token");
    console.log("this", isAuthenticated);

    return (
        <div>
            <Route
                {...restOfProps}
                render={(props) =>
                    isAuthenticated ? <Component {...props} /> : <Navigate to="/signin" />

                }
            />
        </div>

    );
}

export default ProtectedRoute;