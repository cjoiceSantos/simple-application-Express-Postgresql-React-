import React, {Component} from 'react'
import axios from 'axios'
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import Main from "../template/main"

const headerProps = {
    icon: 'bar-chart',
    title: 'Relatórios ',
}
const baseUrl = 'http://localhost:3003/relatorio'

const inicioState = {
    r1: { 
        nome: "", 
	    codigo: "", 
	    gerente: "", 
	    iniciogerente: ""
    },
    list: [],
    mostrarForm: false,
    nameButton: 'inserir',
    notify: '',
    disabledButton: false,
    pkDepartamento: null
}


export default class Relatorios extends Component {
    render() {
        return ( 
            <Main {...headerProps}> 
               aqui
            </Main>
        )
    }
}

