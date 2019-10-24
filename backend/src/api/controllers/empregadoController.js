const empregado = require("../models/empregado")

module.exports = {
    async post(req, res) {
        const {nome,nomedomeio,sobrenome, codigo, dtnascimento,endereco,sexo,salario,gerente,departamento} = req.body 
        try{
            await  empregado.inserirempregado({nome,nomedomeio,sobrenome, codigo, dtnascimento,endereco,sexo,salario,gerente,departamento})
            return res.status(200).json("Empregado inserido")
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    },

    async put(req, res) {
        const id = req.params.id
        const {nome,nomedomeio,sobrenome, dtnascimento,endereco,sexo,salario,gerente,departamento} = req.body
    
        try{
            await  empregado.atualizarempregado(id, {nome,nomedomeio,sobrenome, dtnascimento,endereco,sexo,salario,gerente,departamento})
        return res.status(200).json("Empregado atualizado")
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
            await empregado.removerempregado(id)
            return res.status(200).json("Empregado removido." )
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    },

    async get(req, res){
        try{
            const result = await empregado.listarempregado()
            return res.status(200).json(result)
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    }
}