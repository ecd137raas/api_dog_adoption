var connection = require('../database/connection');
const axios = require('axios');

const getImage = async () => {
    try {
      return await axios.get('https://dog.ceo/api/breeds/image/random')
    } catch (error) {
      console.error(error)
    }
}
  
module.exports = {
    async index(req, res){
        const pets = await connection.select('*').from('pets');
        res.status(200).json(pets);        
    },
    async indexID(req, res){
        var id = req.params.id;
        const pets = await connection('pets').where('id', id).select('*');
        if(pets!=""){
            res.status(200).json(pets);        
        } else {
            res.sendStatus(204)        
        }
    },
    async create(req, res){
        const { tipo, nome, idade, id_centro_adocao } = req.body;
        const foto = await getImage()
        try{
            await connection('pets').insert({tipo: `${tipo}`, nome: `${nome}`, idade: `${idade}`, foto: `${foto.data.message}`, id_centro_adocao: `${id_centro_adocao}`}); 
            res.status(200).json({sucesso: 'Registro incluído com sucesso'});
        }catch(err){
            res.status(400).json({erro: err});    
        }
    },
    async update(req, res){
        var id = req.params.id;
        const { tipo, nome, idade, foto } = req.body;
        try{
            await connection('pets').where('id', id).update({tipo, nome, idade, foto}); 
            res.status(200).json({sucesso: 'Registro alterado com sucesso'});
        }catch(err){
            res.status(400).json({erro: err});    
        }
    },
    async remove(req, res){
        var id = req.params.id;
        try{
            await connection('pets').where('id', id).del(); 
            res.status(200).json({sucesso: 'Registro removido com sucesso'});
        }catch(err){
            res.status(400).json({erro: err});    
        }
    }
}
