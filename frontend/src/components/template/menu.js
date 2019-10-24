import "./menu.css"
import React from 'react'

export default props => (
    <aside className='menu-area'> 
        <nav className="menu"> 
            <a href="#/home">
                <i className="fa fa-home">      Início </i> 
            </a>
            <a href="#/empregado">
                <i className="fa fa-id-badge">  Empregado </i>  
            </a>
            <a href="#/departamento">
                <i className="fa fa-briefcase"> Departamento </i> 
            </a>
            <a href="#/dependente">
                <i className="fa fa-child"> Dependente</i> 
            </a>
            <a href="#/projeto">
                <i className="fa fa-tasks"> Projeto</i> 
            </a>
            <a href="#/local">
                <i className="fa fa-map-o "> Local</i> 
            </a>
            <a href="#/trabalhaem">
                <i className="fa fa-suitcase"> TrabalhaEm</i> 
            </a>

            <a href="#/relatorios">
                <i className="fa fa-bar-chart"> RELATÓRIOS</i> 
            </a>
        </nav>
    </aside>
)