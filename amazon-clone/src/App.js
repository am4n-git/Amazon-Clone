import React,{useEffect} from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'; 
import Login from './Login';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { auth } from './firebase';
import {useStateValue} from './StateProvider';

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    //only runs when app component is fully rendered
    auth.onAuthStateChanged(authUser =>{
      console.log("USER is>>> ", authUser);

      if(authUser){
        //user is just logged in or user was logged in
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      } 
      else{
        //user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="App" >

        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            
          </Route>





        </Switch>

    </div>
    </Router>

  );
}

export default App;
