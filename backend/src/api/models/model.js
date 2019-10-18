const pool = require('../../config/database')

class Model{
   
    constructor(table, campos, dados){
        this.table = table;
        this.campos = campos;
        this.dados = dados ;
    }

    async post(table, campos, dados) {
        pool.connect((err, client, done) => {
            if (err) {
                done();
                throw err;
            } 
        });
        const result = await pool.query(`INSERT INTO ${table} (${campos}) VALUES (${dados});`)
        return result
    }

    async put(table, campos, dados, codigo){
        pool.connect((err, client, done) => {
            if(err){
                done();
                throw err;
            }
        });
        
        var querysql =  `UPDATE ${table} SET `
        var params = 0;  
        for(var i=0; i<campos.length; i++){
            if(dados[i] != "''"){
                if(params == 0){
                    params++
                    querysql += `${campos[i]} = ${dados[i]} `
                    continue;
                }  
                querysql += `, ${campos[i]} = ${dados[i]} `
            }
        }
        querysql += ` WHERE codigo = ${codigo}`

        const result = await pool.query(querysql)
        return result
    }

    async delete(table, codigo, dado){
        pool.connect((err, client, done) => {
            if (err) {
                done();
                throw err;
            }
        });

        console.log(`DELETE FROM ${table} WHERE ${codigo} = ${dado};`)
        const result = await pool.query(`DELETE FROM ${table} WHERE ${codigo} = ${dado};`)
        return result
    }


    async get(table) {
        pool.connect((err, client, done) => {
            if (err) {
                done();
                throw err;
            }
        });

        const result = await pool.query(`SELECT * FROM ${table};`)
        return result.rows
    }

}

module.exports = new Model()

