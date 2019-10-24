const modelCrude = require('../models/model')

class Departamento {
    
    constructor(){
        this.campos =  ["nome", "codigo", "gerente", "iniciogerente"]
    }
    
    async inserirDepartamento({nome, codigo, gerente, iniciogerente}) {
        const dados = [`'${nome}'`, codigo, `'${gerente}'`, `'${iniciogerente}'`]
        await modelCrude.post('departamento', this.campos, dados)
    }

    async atualizarDepartamento(codigo, nome, gerente, iniciogerente){
        const dados = [`'${nome}'`, `''`,  `'${gerente}'`, `'${iniciogerente}'`]
        const condition = ` ${this.campos[1]} = ${codigo}`
        await modelCrude.put('departamento', this.campos, dados, condition)
    }

    async removerDepartamento(codigo){
        const condition = `${this.campos[1]} = ${codigo}`
        await modelCrude.delete('departamento', condition)
    }

    async listarDepartamento(){
        return await modelCrude.get('departamento')
    }
}

module.exports = new Departamento()

