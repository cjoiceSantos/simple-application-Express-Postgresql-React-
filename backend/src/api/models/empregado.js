const modelCrude = require('../models/model')

class empregado {
    
    constructor(){
        this.campos =  [ "nome","nomedomeio","sobrenome", "codigo", "dtnascimento","endereco","sexo","salario","gerente","departamento"]
    }
    
    async inserirempregado({nome,nomedomeio,sobrenome, codigo, dtnascimento,endereco,sexo,salario,gerente,departamento}) {
        const dados = [`'${nome}'`,`'${nomedomeio}'`,`'${sobrenome}'`,`'${codigo}'`, `'${dtnascimento}'`, `'${endereco}'`, `'${sexo}'`, `${salario}`, `${gerente}`,`${departamento}`]
        await modelCrude.post('empregado', this.campos, dados)
    }

    async atualizarempregado(codigo,{nome,nomedomeio,sobrenome, dtnascimento,endereco,sexo,salario,gerente,departamento}){
        const dados = [`'${nome}'`,`'${nomedomeio}'`,`'${sobrenome}'`,`''`, `'${dtnascimento}'`, `'${endereco}'`, `'${sexo}'`, `${salario}`, `${gerente}`,`${departamento}`]
        const condition = `${this.campos[3]} = ${codigo}`
        await modelCrude.put('empregado', this.campos, dados, condition)
    }

    async removerempregado(codigo){
        const condition = `${this.campos[3]} = ${codigo}`
        await modelCrude.delete('empregado', condition)
    }

    async listarempregado(){
        return await modelCrude.get('empregado')
    }
}

module.exports = new empregado()

