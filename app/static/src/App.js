import React from 'react';
import './App.css';
import {HashRouter, Route, Redirect} from  'react-router-dom' 
import {Admin} from './components/Admin'
import  {Login} from './components/Login'
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Redirect from="/" exact to="/login" />
        <Route path="/admin" component={Admin}/>
        <Route path="/login" component={Login}/>
      </HashRouter>
    </div>
  );
}
export default App;
