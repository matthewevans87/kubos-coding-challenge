"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
class RestApiService {
    constructor(dataStoreService) {
        this.dataStoreService = dataStoreService;
    }
    InitWebServer() {
        //Init new Express server
        this.expressApp = express();
        this.expressApp.use(bodyParser.json());
        //Enable CORS
        this.expressApp.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        // Configure Routes
        this.expressApp.post('/update', (req, res) => {
            const orderRequest = (req.body);
            // update data store
            res.send(this.dataStoreService.GetSatellites());
        });
        this.expressApp.listen(3001, () => console.log('REST API Listening on port 3001'));
    }
}
exports.RestApiService = RestApiService;
//# sourceMappingURL=RestApiService.js.map