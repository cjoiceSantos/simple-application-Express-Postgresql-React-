const departamento = require("../models/departamento")

module.exports = {

    async post(req, res) {
        const {nome, codigo, gerente, iniciogerente} = req.body 
       
        try{
            await departamento.inserirDepartamento({nome, codigo, gerente, iniciogerente})
            return res.status(200).json("Departamento adicionado.")
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    },

    async put(req, res) {
        const codigo = req.params.id
        const {nome, gerente, iniciogerente} = req.body
    
        try{
            await departamento.atualizarDepartamento(codigo, nome, gerente, iniciogerente)
            return res.status(200).json("Departamento atualizado.")
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    },

    async delete(req, res){
        const id = req.params.id
        try{
            await departamento.removerDepartamento(id)
            return res.status(200).json("Departamento removido.")
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    },

    async get(req, res){
        try{
            const result = await departamento.listarDepartamento()
            return res.status(200).json(result)
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    }
}