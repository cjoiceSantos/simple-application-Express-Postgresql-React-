const modelCrude = require('../models/model')

class Trabalhaem {
    
    constructor(){
        this.campos =  [ "empregado","projeto","horas"]
    }
    
    async inserirTrabalhaem({empregado,projeto,horas}) {
        const dados = [`'${empregado}'`,`${projeto}`,`${horas}`]
        await modelCrude.post('trabalhaem', this.campos, dados)
    }

    async atualizarTrabalhaem(pkEmpregado, pkProjeto, {empregado,projeto,horas}){
        const dados = [`'${empregado}'`,`${projeto}`,`${horas}`]
        const condition = `${this.campos[0]} = '${pkEmpregado}' AND ${this.campos[1]} = '${pkProjeto}'`
        await modelCrude.put('trabalhaem', this.campos, dados, condition)
    }

    async removerTrabalhaem(pkEmpregado, pkProjeto){
        const condition = `${this.campos[0]} = '${pkEmpregado}' AND ${this.campos[1]} = ${pkProjeto}`
        await modelCrude.delete('trabalhaem', condition)
    }

    async listarTrabalhaem(){
        return await modelCrude.get('trabalhaem')
    }
}

module.exports = new Trabalhaem()

