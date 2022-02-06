const { request , response } = require('express');

const userGet = ( req, res = Response ) => {

    //nos trae todos los argumentos que se encuentren en el path
    const query = req.query;
    
    //al desestructurar, validamos solo los argumentos que necesitemos
    const { 
        q,
        nombre = 'No name',
        apellido = 'No last name',
        apiKey
    } = req.query;

    res.json({
        msg: 'Get api',
        q,
        nombre,
        apellido,
        apiKey
    })
}


const userPut = ( req = request, res = response ) => {
    const id = req.params.id;

    
    res.json({
        msg: 'Put api',
        id: `El id fue ${id}`
    })
}

const userPost = ( req, res = response ) => {

    res.json({
        msg: 'Post api',
        name: req.body.name
    })
}

const userDelete = ( req, res = response ) => {
    res.json({
        msg: 'Delete api'
    })
}

module.exports = {
    userGet: userGet,
    userPut: userPut,
    userPost: userPost,
    userDelete: userDelete
}