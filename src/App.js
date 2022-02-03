import Forgetemail from './pages/forgetemail/Forgetemail';
import Forgetpassword from './pages/forgetpassword/Forgetpassword';
import Signin from './pages/signin/Signin';
import SignUp from './pages/signup/SignUp';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MiniDrawer from './pages/display/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import Notes from './pages/notes/Notes';
import Archive from './pages/archive/Archive';
import IsDeleted from './pages/isDeleted/IsDeleted';



function App() {
  return (

    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/forgetemail" element={<Forgetemail />} />
{/* 

        <ProtectedRoute path="/" component={<MiniDrawer />} >

          <Route exact path="/archive" element={<Archive />} />
          <Route exact path="/deleted" element={<IsDeleted />} />
        </ProtectedRoute> */}

        <Route path="/" element={<MiniDrawer />}>

          <Route exact path="/archive" element={<Archive />} />
          <Route exact path="/deleted" element={<IsDeleted />} />

        </Route>

      </Routes>
    </Router>
  );
}

export default App;
