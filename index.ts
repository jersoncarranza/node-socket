import Server from './classes/server';
import {SERVER_PORT} from './global/enviroment';

const server = new Server();

server.start (()=>{
    console.log(`Servidor ${SERVER_PORT}`);
})
