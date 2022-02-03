import React from "react";
import { Route, Navigate ,useNavigate} from "react-router-dom";

// function ProtectedRoute({ component: Component, ...restOfProps }) {

//     const isAuthenticated = localStorage.getItem("token");
//     console.log("this", isAuthenticated);

//     return (
//         <div>
//             <Route
//                 {...restOfProps}
//                 render={(props) =>
//                     isAuthenticated ? <Component {...props} /> : <Navigate to="/signin" />

//                 }
//             />
//         </div>

//     );
// }
export default function ProtectedRoute({ component: Component, ...rest }) {
    const navigate=useNavigate()
    return (
      <Route
        {...rest}
        render={(props) => {
          if (localStorage.getItem("token")) {
            return <Component {...props} />;
          } else {
            return <Navigate to="/signin" />;
            // return navigate('/signin');
          }
        }}
      />
    );
  }

// export default ProtectedRoute;