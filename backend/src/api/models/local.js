const modelCrude = require('../models/model')

class Local {
    
    constructor(){
        this.campos =  [ "departamento","nome"]
    }
    
    async inserirLocal({departamento, nome}) {
        const dados = [`${departamento}`,`'${nome}'`]
        await modelCrude.post('local', this.campos, dados)
    }

    async atualizarLocal(pk, {departamento,nome}){
        const dados = [`${departamento}`,`'${nome}'`]
        const condition = `${this.campos[1]} = ${pk}`
        await modelCrude.put('local', this.campos, dados, condition)
    }

    async removerLocal(nome){
        const condition = `${this.campos[1]} = ${nome}`
        await modelCrude.delete('local', condition)
    }

    async listarLocal(){
        return await modelCrude.get('local')
    }
}

module.exports = new Local()

