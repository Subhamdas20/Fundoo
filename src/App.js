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
import MiniDrawer from './pages/notes/Dashboard';


function App() {
  return ( 
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/signin" element={<Signin /> }/>
          <Route path="/forgetpassword" element={<Forgetpassword/>}/>
          <Route path="/forgetemail" element={ <Forgetemail/>}/>
          <Route path="/dashboard" element={<MiniDrawer/>}/>
        </Routes>
      </Router>
  );
}

export default App;
