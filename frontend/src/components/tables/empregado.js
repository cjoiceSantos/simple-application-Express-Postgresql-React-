import React, {Component} from 'react'
import axios from 'axios'
import {toast } from 'react-toastify'

import Main from "../template/main"

const headerProps = {
    icon: 'users',
    title: 'Table Empregado',
}

const baseUrl = 'http://localhost:3003/empregado'

const inicioState = {
    empregado: { 
        "nome": "",
        "nomedomeio": "",
        "sobrenome": "",
        "codigo": "",
        "dtnascimento": "",
        "endereco": "",
        "sexo": "",
        "salario": "",
        "gerente": "",
        "departamento": ""
    },
    list: [],
    mostrarForm: false,
    pkDepartamento: null
}

export default class Empregado extends Component {
    state = {...inicioState}
    
    clear(){
        this.setState({empregado: inicioState})
    }

    save(){
        const empregado = this.state.empregado
        const method = this.state.pkDepartamento ? 'put' : 'post'
        const url = this.state.pkDepartamento ? `${baseUrl}/${this.state.pkDepartamento}` : baseUrl
        
        axios[method](url, empregado)
            .then(resp => {
                this.refresh()
                this.setState({ empregado: inicioState.empregado})
        })

    }

    getUpdateList(empregado){
        const list = this.state.list.filter(u => u.id !== empregado.id)
        list.unshift(empregado)
        return list
    }

    updateField(event){
        const empregado = {...this.state.empregado}
        empregado[event.target.name] = event.target.value
        this.setState({empregado})
    }

    refresh(){
        axios['get'](baseUrl) 
            .then(resp => {
                const list = resp.data
                this.setState({ list })
        })
    }

    preencherForn(e){
        this.setState({empregado: e, mostrarForm: true, pkDepartamento: e.codigo})
    
    }

    deleteDep(e){
        axios['delete'](`${baseUrl}/${e.codigo}`)
        .then( resp => this.refresh())
        .catch(resp => toast(resp.msg));
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
                                value={this.state.empregado.nome} 
                                onChange={ e => this.updateField(e)}
                                placeholder = "Primeiro nome"/>
                    </div>
                    <div className="col-12 col-md-6"> 
                        <label> Nome do Meio </label>
                        <input type="text" className="form-control" 
                                name="nomedomeio" 
                                value={this.state.empregado.nomedomeio} 
                                onChange={ e => this.updateField(e)}
                                placeholder = "Nome do meio"/>
                    </div>
                    <div className="col-12 col-md-6"> 
                        <label> Sobrenome </label>
                        <input type="text" className="form-control" 
                                name="sobrenome" 
                                value={this.state.empregado.sobrenome} 
                                onChange={ e => this.updateField(e)}
                                placeholder = "Sobrenome"/>
                    </div>
                    <div className="col-12 col-md-6"> 
                        <label> Código </label>
                        <input type="text" className="form-control" 
                                name="codigo" 
                                value={this.state.empregado.codigo} 
                                onChange={ e => this.updateField(e)}
                                placeholder = "Código"/>
                    </div>
                    <div className="col-12 col-md-6"> 
                        <label> Data de nascimento </label>
                        <input type="text" className="form-control" 
                                name="dtnascimento" 
                                value={this.state.empregado.dtnascimento} 
                                onChange={ e => this.updateField(e)}
                                placeholder = "Data de nascimento"/>
                    </div>
                    <div className="col-12 col-md-6"> 
                        <label> Endereço </label>
                        <input type="text" className="form-control" 
                                name="endereco" 
                                value={this.state.empregado.endereco} 
                                onChange={ e => this.updateField(e)}
                                placeholder = "Endereço"/>
                    </div>
                    <div className="col-12 col-md-6"> 
                        <label> Sexo </label>
                        <input type="text" className="form-control" 
                                name="sexo" 
                                value={this.state.empregado.sexo} 
                                onChange={ e => this.updateField(e)}
                                placeholder = "Sexo"/>
                    </div>
                    <div className="col-12 col-md-6"> 
                        <label> Salário </label>
                        <input type="text" className="form-control" 
                                name="salario" 
                                value={this.state.empregado.salario} 
                                onChange={ e => this.updateField(e)}
                                placeholder = "Salario"/>
                    </div>
                    <div className="col-12 col-md-6"> 
                        <label> Gerente </label>
                        <input type="text" className="form-control" 
                                name="gerente" 
                                value={this.state.empregado.gerente} 
                                onChange={ e => this.updateField(e)}
                                placeholder = "Gerente"/>
                    </div>
                    <div className="col-12 col-md-6"> 
                        <label> Departamento </label>
                        <input type="text" className="form-control" 
                                name="departamento" 
                                value={this.state.empregado.departamento} 
                                onChange={ e => this.updateField(e)}
                                placeholder = "departamento"/>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick= { e => this.save(e)}> salvar </button>
                        <button className="btn btn-secondary ml-2" onClick={e=>this.clear(e)}> Cancelar </button>
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
                        <th scope="col">Nome</th>
                        <th scope="col">Nome do Meio</th>
                        <th scope="col">Sobrenome</th>
                        <th scope="col">Código</th>
                        <th scope="col">Data de nascimento</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">Sexo</th>
                        <th scope="col">Gerente</th>
                        <th scope="col">Departamento</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.list.map( e => (
                         <tr>
                            <th scope="row"> {e.codigo} </th>
                            <td> {e.nome} </td>
                            <td> {e.nomedomeio} </td>
                            <td> {e.sobrenome} </td>
                            <td> {e.codigo} </td>
                            <td> {e.dtnascimento} </td>
                            <td> {e.endereco} </td>
                            <td> {e.sexo} </td>
                            <td> {e.gerente} </td>
                            <td> {e.departamento} </td>
                            <td> 
                                <button onClick= {() => { this.preencherForn(e)}} > Editar </button>
                                <button onClick = {() => { this.deleteDep(e)}}>  Remover </button>
                            </td>
                         </tr>
                    ) )}
                </tbody>
            </table>
    )}
    

    render() {
        return ( 
            <Main {...headerProps}> 
                <button className="btn btn-primary" onClick={ () => { this.setState({mostrarForm: !this.state.mostrarForm})} }> Inserir </button>
                <hr/>
                {this.state.mostrarForm ? this.renderForm() : null }
                
                {this.renderTable()}
            </Main>
        )
    }
}


