const dependente = require("../models/dependente")

module.exports = {

    async post(req, res) {
        const {empregado, nome, sexo, dtnascimento,parentesco} = req.body 
       
        try{
            await dependente.inserirDependente({empregado, nome, sexo, dtnascimento,parentesco})
            return res.status(200).json(req.body)
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    },

    async put(req, res) {
        const id = req.params.id
        const {nome, sexo, dtnascimento,parentesco} = req.body
    
        try{
            await dependente.atualizarDependente (id, {nome, sexo, dtnascimento,parentesco})
            return res.status(200).json(req.body)
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    },

    async delete(req, res){
        const id = req.params.id
        const nome = req.params.nome
        try{
            await dependente.removerDependente(id, nome)
            return res.status(200).json(req.body)
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