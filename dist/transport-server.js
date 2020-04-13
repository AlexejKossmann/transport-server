"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http = __importStar(require("http"));
const path_1 = __importDefault(require("path"));
const World_1 = require("./ressources/World");
class TransportServer {
    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
        this.initiateWorld();
    }
    createApp() {
        this.app = express_1.default();
        this.app.use(cors_1.default());
    }
    config() {
        this.port = process.env.SERVER_PORT || TransportServer.PORT;
        this.app.get('/', (req, res) => {
            res.sendFile(path_1.default.resolve('./client/index.html'));
        });
    }
    createServer() {
        this.server = http.createServer(this.app);
    }
    sockets() {
        this.io = require('socket.io').listen(this.server, { origins: '*:*' });
    }
    listen() {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });
        this.io.on("connect", (socket) => {
            console.log('Connected client on port %s', this.port);
            socket.on('disconnect', () => {
                console.log('Client disconnected.');
            });
            socket.on('getWorld', (tiles) => {
                this.io.emit('getWorld', this.getWorldTiles());
            });
        });
    }
    initiateWorld() {
        this.world = new World_1.World(100, 100);
        this.world.generate();
    }
    getWorldTiles() {
        return this.world.getTiles();
    }
    getApp() {
        return this.app;
    }
}
exports.TransportServer = TransportServer;
TransportServer.PORT = 3001;
//# sourceMappingURL=transport-server.js.map