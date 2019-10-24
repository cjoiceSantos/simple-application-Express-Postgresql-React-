import './logo.css'
import logo from "../../img/logo.jpg"
import  React from 'react'

export default props=> (
    <aside className="logo"> 
        <a href="/" className="logo">
            <img src={logo} alt="logo"/>
        </a>
     </aside>
)