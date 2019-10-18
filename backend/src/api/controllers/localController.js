const local = require("../models/local")

module.exports = {
    async post(req, res) {
        const {departamento, nome} = req.body 
        try{
            await  local.inserirLocal({departamento, nome})
            return res.status(200).json(req.body)
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    },

    async put(req, res) {
        const pk = req.params.nome 
        const {departamento, nome} = req.body
        try{
            await  local.atualizarLocal(pk, {departamento, nome})
            return res.status(200).json(req.body)
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
            await local.removerLocal(nome)
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
            const result = await local.listarLocal()
            return res.status(200).json(result)
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    }
}