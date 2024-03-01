import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Details from './components/Details';
//import Error from './components/Error';
import { BrowserRouter as Router, Route } from 'react-router-dom'




function App() {
  return (
  <>
   <Header />
 
   <Router>
    <Route exact path = "/" component =  {Home} />
    <Route exact path = "/login" component =  {Login} />
    <Route exact path = "/details" component =  {Details} />
    

   </Router>

   
  </>

  );
}

export default App;
