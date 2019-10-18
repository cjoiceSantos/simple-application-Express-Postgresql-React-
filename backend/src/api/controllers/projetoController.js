const projeto = require("../models/projeto")

module.exports = {
    async post(req, res) {
        const {descricao,codigo,local,departamento} = req.body 
        
        try{
            await  projeto.inserirProjeto({descricao,codigo,local,departamento})
            return res.status(200).json(req.body)
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    },

    async put(req, res) {
        const pk = req.params.id 
        const {descricao,codigo,local,departamento} = req.body
        try{
            await  projeto.atualizarProjeto(pk, {descricao,codigo,local,departamento})
            return res.status(200).json(req.body)
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    },

    async delete(req, res){
        const pk = req.params.id
        try{
            await projeto.removerProjeto(pk)
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
            const result = await projeto.listarProjeto()
            return res.status(200).json(result)
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    }
}