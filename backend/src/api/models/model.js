const pool = require('../../config/database')

class Model{
   
    constructor(){}

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

    async put(table, campos, dados, condition){
        pool.connect((err, client, done) => {
            if(err){
                done();
                throw err;
            }
        });
        
        var querysql =  `UPDATE ${table} SET `
        var params = 0;  
        for(var i=0; i<campos.length; i++){
            if(dados[i] != "''" && dados[i] != ""){
                if(params == 0){
                    params++
                    querysql += `${campos[i]} = ${dados[i]} `
                    continue;
                }  
                querysql += `, ${campos[i]} = ${dados[i]} `
            }
        }
        querysql += ` WHERE ${condition}`
        console.log(querysql)
        const result = await pool.query(querysql)
        return result
    }

    async delete(table,condition){
        pool.connect((err, client, done) => {
            if (err) {
                done();
                throw err;
            }
        });
        const result = await pool.query(`DELETE FROM ${table} WHERE ${condition};`)
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

