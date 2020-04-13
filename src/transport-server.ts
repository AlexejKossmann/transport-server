import express from 'express';
import cors from 'cors';
import * as http from 'http';
import path from "path";
import { World } from "./ressources/World";
import {Tile} from "./ressources/Tile";

export class TransportServer {
    public static readonly PORT:number = 3001;
    private app: express.Application;
    private server: http.Server;
    private port: string|number;
    private io: SocketIO.Server;
    private world: World;

    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
        this.initiateWorld();
    }

    private createApp(): void {
        this.app = express();
        this.app.use(cors());
    }

    private config(): void {
        this.port = process.env.SERVER_PORT || TransportServer.PORT;

        this.app.get('/', (req: any,res: any) => {
            res.sendFile(path.resolve('./client/index.html'));
        })
    }

    private createServer(): void {
        this.server = http.createServer(this.app);
    }

    private sockets(): void {
        this.io = require('socket.io').listen(this.server, {origins: '*:*'});
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });

        this.io.on("connect", (socket: any) => {
            console.log('Connected client on port %s', this.port);

            socket.on('disconnect', () => {
                console.log('Client disconnected.');
            });

            socket.on('getWorld', (tiles:Tile[][]) => {
                this.io.emit('getWorld', this.getWorldTiles());
            });
        });
    }

    private initiateWorld(){
        this.world = new World(100, 100);
        this.world.generate();
    }

    public getWorldTiles(): Tile[][] {
        return this.world.getTiles();
    }

    public getApp(): express.Application {
        return this.app;
    }
}
