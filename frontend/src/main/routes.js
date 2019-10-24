import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from "../components/template/home"
import Departamento from "../components/tables/departamento"
import Empregado from "../components/tables/empregado"
import Relatorios from "../components/tables/relatorios"
export default props => 
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/departamento' component={Departamento}/>
        <Route path='/empregado' component={Empregado}/>
        <Route path='/relatorios' component={Relatorios}/>
        <Redirect from='*' to='/'/>
    </Switch>