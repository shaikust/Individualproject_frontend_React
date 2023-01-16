
import './App.css';
import Login from './component/login.tsx';
import {BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Register from './component/register';
import Admin from './component/adminpage';
import Tracker from './component/parceltracker.jsx';
import About from './component/about';
import Contact from './component/contactus';
import Adminpage from './component/admin';
import Addparcel from './component/addparcel';
import Update from './component/update';

function App() {
  return (
    <div >
     {/* <Login/> */}
     <Router>
       <Switch>
         <Route exact path='/' component={Login}/>
         <Route exact path='/register' component={Register}/>
         <Route exact path='/login' component={Login}/>
         <Route exact path='/adminpage' component={Admin}/>
         <Route exact path='/parceltracker' component={Tracker}/>
         <Route exact path='/about' component={About}/>
         <Route exact path='/contactus' component={Contact}/>
         <Route exact path='/parcellist' component={Adminpage}/>
         <Route exact path='/addparcel' component={Addparcel}></Route>
         <Route exact path='/update' component={Update}/>
        
       </Switch>
     </Router>
    </div>
  );
}

export default App;
