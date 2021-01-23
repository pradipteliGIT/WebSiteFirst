import React,{lazy} from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Header from '../Header/Header';
import AsyncComponent from './AsyncComponent';
const Home=lazy(()=>import('../Home/Home'));
const About=lazy(()=>import('../About/About'));
const Contact=lazy(()=>import('../Contact/Contact'));
const Routing=()=>{
    return <Router>
        <Header/>
        <div className="container">
         <Switch>
             <Route exact path="/" component={AsyncComponent(Home)}/>
             <Route  path="/Home" component={AsyncComponent(Home)}/>
             <Route  path="/About" component={AsyncComponent(About)}/>
             <Route  path="/Contact" component={AsyncComponent(Contact)}/>
             <Route component={AsyncComponent(Home)}/>
         </Switch>
        </div>
    </Router>
};
export default Routing;