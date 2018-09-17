"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const TelemetryPayload_1 = require("../models/TelemetryPayload");
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
        this.expressApp.post('/processTelemetry', (req, res) => {
            const telemetryPayload = (req.body);
            if (TelemetryPayload_1.TelemetryPayload.isValid(telemetryPayload)) {
                this.dataStoreService.ProcessTelemetry(TelemetryPayload_1.TelemetryPayload.getTelemetry(telemetryPayload));
            }
            else {
                res.status(500);
            }
            // res.send(this.dataStoreService.GetSatellites())
        });
        this.expressApp.post('/getSatellites', (req, res) => {
            res.send(this.dataStoreService.GetSatellites());
        });
        // This Really should be taking place on the client, but did here for sake of time
        this.expressApp.post('/getFlattenedBarrels', (req, res) => {
            res.send(this.flattenToBarrels(this.dataStoreService.GetSatellites()));
        });
        this.expressApp.listen(3001, () => console.log('REST API Listening on port 3001'));
    }
    flattenToBarrels(satellites) {
        const flattenedBarrels = satellites.flatMap((s, i, a) => {
            return s.barrels.map(b => ({
                barrel_id: b.barrel_id,
                errors: b.errors.join(', '),
                last_flavor_sensor_result: b.last_flavor_sensor_result,
                satellite_id: s.satellite_id,
                status: b.status,
                update_age: Date.now()
            }));
        });
        return flattenedBarrels;
    }
}
exports.RestApiService = RestApiService;
//# sourceMappingURL=RestApiService.js.map