import "./menu.css"
import React from 'react'

export default props => (
    <aside className='menu-area'> 
        <nav className="menu"> 
            <a href="#/empregado">
                <i className="fa fa-empregado"></i> Empregado
            </a>
            <a href="#/departamento">
                <i className="fa fa-departamento"></i> Departamento
            </a>
            <a href="#/dependente">
                <i className="fa fa-dependente"></i> Depedente
            </a>
            <a href="#/projeto">
                <i className="fa fa-projeto"></i> Projeto
            </a>
            <a href="#/local">
                <i className="fa fa-local"></i> Local
            </a>
            <a href="#/trabalhaem">
                <i className="fa fa-trabalhaem"></i> TrabalhaEm
            </a>

            <a href="#/relatorios">
                <i className="fa fa-trabalhaem"></i> RELATÓRIOS
            </a>
        </nav>
    </aside>
)