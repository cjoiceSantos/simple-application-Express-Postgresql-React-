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
        await modelCrude.put('departamento', this.campos, dados, codigo)
    }

    async removerDepartamento(codigo){
        await modelCrude.delete('departamento', this.campos[1], codigo)
    }

    async listarDepartamento(){
        return await modelCrude.get('departamento')
    }
}

module.exports = new Departamento()

