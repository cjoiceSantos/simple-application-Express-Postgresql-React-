const modelCrude = require('../models/model')

class Projeto {
    
    constructor(){
        this.campos =  ["descricao","codigo","local","departamento"]
    }
    
    async inserirProjeto({descricao,codigo,local,departamento}) {
        const dados = [`'${descricao}'`,`${codigo}`, `'${local}'`, `'${departamento}'`]
        await modelCrude.post('projeto', this.campos, dados)
    }

    async atualizarProjeto(pk, {descricao,codigo,local,departamento}){
        const dados = [`'${descricao}'`,`${codigo}`, `'${local}'`, `'${departamento}'`]
        const condition = `${this.campos[1]} = ${pk}`
        await modelCrude.put('projeto', this.campos, dados, condition)
    }

    async removerProjeto(pk){
        const condition = `${this.campos[1]} = ${pk}`
        await modelCrude.delete('projeto', condition)
    }

    async listarProjeto(){
        return await modelCrude.get('projeto')
    }
}

module.exports = new Projeto()

