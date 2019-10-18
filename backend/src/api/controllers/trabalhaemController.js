const trabalhaem = require("../models/trabalhaem")

module.exports = {

    async post(req, res) {
        const {empregado,projeto,horas} = req.body 
        
        try{
            await  trabalhaem.inserirTrabalhaem({empregado,projeto,horas})
            return res.status(200).json(req.body)
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    },

    async put(req, res) {
        const pkEmpregado = req.params.empregado
        const pkProjeto = req.params.projeto
        const {empregado,projeto,horas} = req.body
        try{
            await  trabalhaem.atualizarTrabalhaem(pkEmpregado, pkProjeto, {empregado,projeto,horas})
            return res.status(200).json(req.body)
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    },

    async delete(req, res){
        const pkEmpregado = req.params.empregado
        const pkProjeto = req.params.projeto
       
        try{
            await trabalhaem.removerTrabalhaem(pkEmpregado, pkProjeto)
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
            const result = await trabalhaem.listarTrabalhaem()
            return res.status(200).json(result)
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    }
}