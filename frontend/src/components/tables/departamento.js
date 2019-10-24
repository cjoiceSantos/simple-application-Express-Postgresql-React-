import React, {Component} from 'react'
import axios from 'axios'
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import Main from "../template/main"

const headerProps = {
    icon: 'briefcase',
    title: 'Table Departamento',
}

const baseUrl = 'http://localhost:3003/departamento'

const inicioState = {
    departamento: { 
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

export default class Departamento extends Component {
    state = {...inicioState}
    
    clear(){
        this.setState({departamento: inicioState, nameButton: 'inserir', mostrarForm: false, disabledButton: false})
    }

    save(){
        const departamento = this.state.departamento

        const method = this.state.pkDepartamento ? 'put' : 'post'
        const url = this.state.pkDepartamento ? `${baseUrl}/${this.state.pkDepartamento}` : baseUrl
        

        axios[method](url, departamento)
            .then(resp => {
                this.refresh() 
                this.setState({ departamento: inicioState.departamento})
                this.setState({disabledButton: false})
                toast(resp.data)
        })
            .catch(error => {toast(error.Response)})
       

    }

    getUpdateList(departamento){
        const list = this.state.list.filter(u => u.id !== departamento.id)
        list.unshift(departamento)
        return list
    }

    updateField(event){
        const departamento = {...this.state.departamento}
        departamento[event.target.name] = event.target.value
        this.setState({departamento})
    }

    refresh(){
        axios['get'](baseUrl) 
            .then(resp => {
                const list = resp.data
                this.setState({ list })
        })
    }

    preencherForn(e){
        this.setState({departamento: e, mostrarForm: true, pkDepartamento: e.codigo, nameButton: 'atualizar', disabledButton: true})
    }

    deleteDep(e){
        axios['delete'](`${baseUrl}/${e.codigo}`)
        .then(resp => {this.refresh() 
                        toast(resp.data)
                    }) 
        .catch(error => {toast(error.Response)});
    }

    componentDidMount(){
        this.refresh()
    }

    renderForm(){
        return (
            <div className="form"> 
                <div className="row"> 
                    <div className="col-12 col-md-6"> 
                        <label> Nome </label>
                        <input type="text" className="form-control" 
                                name="nome" 
                                value={this.state.departamento.nome} 
                                onChange={ e => this.updateField(e)}
                                placeholder = "Nome"/>
                    </div>
                    <div className="col-12 col-md-6"> 
                        <label> Código </label>
                        <input type="text" className="form-control" id='cod'
                                name="codigo" 
                                value={this.state.departamento.codigo} 
                                onChange={ e => this.updateField(e)}
                                placeholder = "Código"
                                disabled = {this.state.disabledButton}
                        
                        />
                    </div>
                    <div className="col-12 col-md-6"> 
                        <label> Gerente </label>
                        <input type="text" className="form-control" 
                                name="gerente" 
                                value={this.state.departamento.gerente} 
                                onChange={ e => this.updateField(e)}
                                placeholder = "Gerente"/>
                    </div>
                    <div className="col-12 col-md-6"> 
                        <label> Início Gerente (Data) </label>
                        <input type="text" className="form-control" 
                                name="iniciogerente" 
                                value={this.state.departamento.iniciogerente} 
                                onChange={ e => this.updateField(e)}
                                placeholder = "data de início do gerente"/>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick= { e => this.save(e)}> salvar </button>
                        <button className="btn btn-secondary ml-2" onClick={()=>this.clear()}> Cancelar </button>
                    </div>
                </div>
            </div>
        )
    }

    renderTable(){
        return (
          <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Gerente</th>
                        <th scope="col">Inicio Gerente</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.list.map( e => (
                         <tr>
                            <th scope="row"> {e.codigo} </th>
                            <td> {e.nome} </td>
                            <td> {e.gerente} </td>
                            <td> {e.iniciogerente} </td>
                            <td> 
                                <button onClick= {() => { this.preencherForn(e)}} >  <i className='fa fa-pencil-square-o '></i> </button>
                                <button onClick = {() => { this.deleteDep(e)}}>  <i className='fa  fa-times'></i> </button>
                            </td>
                         </tr>
                    ) )}
                </tbody>
            </table>
    )}
    

    render() {
        return ( 
            <Main {...headerProps}> 
                <button className="btn btn-primary" onClick={ () => { this.setState({mostrarForm: !this.state.mostrarForm})} }> 
                    {this.state.nameButton}
                </button>
                <hr/>
                {this.state.mostrarForm ? this.renderForm() : null }
                {this.renderTable()}
            </Main>
        )
    }
}

