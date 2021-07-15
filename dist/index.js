"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./classes/server"));
var enviroment_1 = require("./global/enviroment");
var server = new server_1.default();
server.start(function () {
    console.log("Servidor " + enviroment_1.SERVER_PORT);
});
