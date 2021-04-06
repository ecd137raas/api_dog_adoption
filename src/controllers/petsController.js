var connection = require('../database/connection');

module.exports = {
    async index(req, res){
        const pets = await connection.select('*').from('pets');
        res.status(200).json(pets);        
    },
    async indexID(){
        console.log('Teste ID')
    },
    async create(req, res){
        var data = req.body;
        try{
            await connection('pets').insert(data); 
            res.status(200).json({sucesso: 'Registro incluído com sucesso'});
        }catch(err){
            res.status(400).json({erro: err});    
        }
    },
    async update(){
        console.log('Teste Update')
    },
    async remove(){
        console.log('Teste Delete')
    }

}