import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import {HashRouter} from 'react-router-dom'
import Routes from "./routes"

import "./App.css"
import Logo from "../components/template/logo"
import Menu from "../components/template/menu"
import Footer from "../components/template/footer"


export default props => (
  <HashRouter>
     <div className='app'> 
        <Logo/>
        <Menu/>   
        <Routes/>
        <Footer/>
        <ToastContainer
          position="top-right"
          autoClose={7000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
    </div>
  </HashRouter>
  
)