const dependente = require("../models/dependente")

module.exports = {

    async post(req, res) {
        const {empregado, nome, sexo, dtnascimento,parentesco} = req.body 
       
        try{
            await dependente.inserirDependente({empregado, nome, sexo, dtnascimento,parentesco})
            return res.status(200).json("Dependente inserido")
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    },

    async put(req, res) {
        const pk = req.params.nome
        const {empregado, sexo, dtnascimento,parentesco} = req.body
    
        try{
            await dependente.atualizarDependente (pk, {empregado, sexo, dtnascimento,parentesco})
            return res.status(200).json("Dependente atualizado")
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    },

    async delete(req, res){
        const nome = req.params.nome
        try{
            await dependente.removerDependente(nome)
            return res.status(200).json("Dependente removido")
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    },

    async get(req, res){
        try{
            const result = await dependente.listarDependente()
            return res.status(200).json(result)
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    }
}