const pool = require('../../config/database')

class Relatorios{
    constructor(){}

    async getEmpregadoPorEndereco(endereco,sexo,nome,sobrenome) {
        pool.connect((err, client, done) => {
            if (err) {
                done();
                throw err;
            }
        });
        const result = await pool.query(`SELECT * FROM empregado WHERE endereco ILIKE '%${endereco || ''}%' 
            AND sexo='${sexo || ''}' AND sobrenome ILIKE '%${sobrenome || ''}%' AND nome ILIKE '%${nome || ''}%' order by nome`)
        return result.rows
    }
    
    async getProjetoPorDepartamento(departamento,local) {
        pool.connect((err, client, done) => {
            if (err) {
                done();
                throw err;
            }
        });  
        const result = await pool.query(`SELECT * FROM Projeto p 
        WHERE p.departamento = ${departamento} and p.local ILIKE '%${local || ''}%' 
        ORDER BY p.descricao`)
        return result.rows
    }

    async getDepartamentoPorLocal(departamento,local) {
        pool.connect((err, client, done) => {
            if (err) {
                done();
                throw err;
            }
        });
        const result = await pool.query(`SELECT d.nome as Departamento, l.nome as Local FROM Departamento d 
        join local l on l.departamento = d.codigo AND l.nome ilike '%${local || ''}%' AND d.nome ilike '%${departamento || ''}%'`)
        return result.rows
    }

    async getDependentesPorIdade(sexoEmpregado,sexoDependente,idadeMinima) {
        pool.connect((err, client, done) => {
            if (err) {
                done();
                throw err;
            }
        });
        const result = await pool.query(`select (nome || ' ' || nomedomeio || '. ' || sobrenome) as nome, 
        extract(year from age(dtnascimento)) as anos from empregado 
        WHERE sexo = '${sexoEmpregado || ''}' UNION select nome, extract(year from age(dtnascimento)) as anos from dependente where sexo = '${sexoDependente || ''}' and extract(year from age(dtnascimento)) > ${idadeMinima || ''} order by anos desc`)
        return result.rows
    }

    async getAVGDepenPorEmpre() {
        pool.connect((err, client, done) => {
            if (err) {
                done();
                throw err;
            }
        });
        const result = await pool.query(`SELECT round(((SELECT CAST(COUNT(*) AS decimal(10,0))	FROM dependente) / (SELECT CAST(COUNT (*) AS decimal(10,0)) FROM empregado)),2)AS media`)
        return result.rows

    }

    async getDepartamentoQtdProjetos(quantidadeMaximaProjetos) {
        pool.connect((err, client, done) => {
            if (err) {
                done();
                throw err;
            }
        });

        const result = await pool.query(`select d.nome, COUNT(p.departamento) from Departamento d LEFT JOIN Projeto p ON p.departamento = d.codigo GROUP BY d.nome HAVING COUNT(p.departamento) <= ${quantidadeMaximaProjetos || ''}`)
        return result.rows
    }
}

module.exports = new Relatorios