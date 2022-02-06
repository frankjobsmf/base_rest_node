const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users'

        //methods
        this.middlewares();
        this.routes();
    
    }

    middlewares(){
        //cors
        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use( this.usersPath, require('../routes/user.route') )
    }

    listen(){
        this.app.listen( this.port);
    }

}

module.exports = Server