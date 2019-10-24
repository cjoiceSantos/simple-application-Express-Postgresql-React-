const modelCrude = require('../models/model')

class Dependente {
    
    constructor(){
        this.campos =  ["empregado", "nome", "sexo", "dtnascimento","parentesco"]
    }
    
    async inserirDependente({empregado, nome, sexo, dtnascimento,parentesco}) {
        const dados = [`'${empregado}'`, `'${nome}'`, `'${sexo}'`, `'${dtnascimento}'`, `'${parentesco}'`]
        await modelCrude.post('dependente', this.campos, dados)
    }

    async atualizarDependente(pk,{empregado, sexo, dtnascimento,parentesco}){
        const dados = [ `'${empregado}'`, `''`, `'${sexo}'`, `'${dtnascimento}'`, `'${parentesco}'`]
        const condition = ` ${this.campos[1]} = ${pk}`
        await modelCrude.put('dependente', this.campos, dados, condition)
    }

    async removerDependente(nome){
        const condition = `${this.campos[1]} = ${nome}`
        await modelCrude.delete('dependente', condition)
    }

    async listarDependente(){
        return await modelCrude.get('dependente')
    }
}

module.exports = new Dependente()

