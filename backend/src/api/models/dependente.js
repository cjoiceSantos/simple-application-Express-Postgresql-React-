const modelCrude = require('../models/model')

class Dependente {
    
    constructor(){
        this.campos =  ["empregado", "nome", "sexo", "dtnascimento","parentesco"]
    }
    
    async inserirDependente({empregado, nome, sexo, dtnascimento,parentesco}) {
        const dados = [`'${empregado}'`, `'${nome}'`, `'${sexo}'`, `'${dtnascimento}'`, `'${parentesco}'`]
        await modelCrude.post('dependente', this.campos, dados)
    }

    async atualizarDependente(empregado,{nome, sexo, dtnascimento,parentesco}){
        const dados = [ `''`, `''`, `'${sexo}'`, `'${dtnascimento}'`, `'${parentesco}'`]
        const condition = ` ${this.campos[0]} = ${empregado} AND ${this.campos[1]} = '${nome}'`
        await modelCrude.put('dependente', this.campos, dados, condition)
    }

    async removerDependente(codigo, nome){
        const condition = ` ${this.campos[0]} = '${codigo}' AND ${this.campos[1]} = ${nome}`
        await modelCrude.delete('dependente', condition)
    }

    async listarDependente(){
        return await modelCrude.get('dependente')
    }
}

module.exports = new Dependente()

