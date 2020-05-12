import React from 'react'
import { BrowserRouter, Route,Switch , Redirect,Link, withRouter} from 'react-router-dom'
import ScreenInitial from './pages/ScreenInitial/index'
import Login from './pages/Login/index'
import Home from './pages/Home/index'
import DashBoard from './pages/DashBoard/index'
import InformacoesProjeto from './pages/InformacoesProjeto/index'
export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={ScreenInitial}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/home/" exact component={Home}/>
            <Route path="/trabalho/:id" exact component={InformacoesProjeto}/>
            <Route path="/dashboard/:id" exact component={DashBoard}/>
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
        </BrowserRouter>
    );
}