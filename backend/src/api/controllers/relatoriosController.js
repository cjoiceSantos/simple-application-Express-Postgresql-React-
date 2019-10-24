const relatorio = require("../models/relatorios")

module.exports = {

    async empregadoPorEndereco(req, res) {
        const {endereco,sexo,nome,sobrenome} = req.query
        console.log({endereco,sexo,nome,sobrenome} ) 
        try{
            const result = await relatorio.getEmpregadoPorEndereco(endereco,sexo,nome,sobrenome)
            return res.status(200).json(result)
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    },

    async projetoPorDepartamento(req, res) {
        const {departamento,local} = req.query
         
        try{
            const result = await relatorio.getProjetoPorDepartamento(departamento,local)
            return res.status(200).json(result)
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    },

    async departamentoPorLocal(req, res) {
        const {departamento,local} = req.query 
       
        try{
            const result = await relatorio.getDepartamentoPorLocal(departamento,local)
            return res.status(200).json(result)
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    },

    async dependentesPorIdade(req, res) {
        const {sexoEmpregado,sexoDependente,idadeMinima} = req.query 
        try{
            const result = await relatorio.getDependentesPorIdade(sexoEmpregado,sexoDependente,idadeMinima)
            return res.status(200).json(result)
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    },

    async AVGDepenPorEmpre(req, res) {
        try{
            const result = await relatorio.getAVGDepenPorEmpre()
            return res.status(200).json(result)
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    },

    async departamentoQtdProjetos(req, res) {
        const {quantidadeMaximaProjetos} = req.query 
        try{
            const result = await relatorio.getDepartamentoQtdProjetos(quantidadeMaximaProjetos)
            return res.status(200).json(result)
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    }
}    