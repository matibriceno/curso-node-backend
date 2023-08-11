const { response } = require('express');

const getUsuarios = (req, res = response) => {
    const {nombre, edad, apikey} = req.query
  
    res.json({
        msg: 'get API - controlador',
        nombre, 
        edad, 
        apikey
    });
}
const postUsuarios = (req, res = response) => {
    const {nombre, edad} = req.body;
    
    res.json({
        msg: 'post API',
        nombre, 
        edad
    });
}

const deleteUsuarios = (req, res = response) => {
    res.json({
        msg: 'delete API'
    });
}


const putUsuarios = (req, res) => {

    const {id} = req.params

    res.json({
        msg: 'put API',
        id,
    });
}
const patchUsuarios = (req, res) => {
    res.json({
        msg: 'patch API'
    });
}
module.exports = {
    getUsuarios,
    deleteUsuarios,
    postUsuarios,
    putUsuarios,
    patchUsuarios,
}