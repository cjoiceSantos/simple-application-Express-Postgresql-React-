const relatorio = require("../models/relatorios")

module.exports = {

    async empregadoPorEndereco(req, res) {
        const {endereco,sexo,nome,sobrenome} = req.query 
        try{
            const result = await relatorio.getEmpregadoPorEndereco(endereco[0],sexo[0],nome[0],sobrenome[0])
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
            const result = await relatorio.getProjetoPorDepartamento(departamento[0],local[0])
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
            const result = await relatorio.getDepartamentoPorLocal(departamento[0],local[0])
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
            const result = await relatorio.getDependentesPorIdade(sexoEmpregado[0],sexoDependente[0],idadeMinima[0])
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
            const result = await relatorio.getDepartamentoQtdProjetos(quantidadeMaximaProjetos[0])
            return res.status(200).json(result)
        }
        catch (err) {
            return res.status(400).json({
                msg: `Error: ${err}`
            })
        }
    }
}    