"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class MemoryBackedDataStoreService {
    constructor() {
        this.statellites = new Array();
        // this.statellites.push({
        //     satellite_id: 1,
        //     barrels: [
        //         {
        //             barrel_id: 1,
        //             last_flavor_sensor_result: 'woody',
        //             status: 'aging'
        //         }
        //     ]
        // })
    }
    ProcessTelemetry(telemetry) {
        //update
        let satellite = _(this.statellites)
            .filter((s) => s.satellite_id == telemetry.satellite_id)
            .first();
        //create new satellites
        if (undefined === satellite) {
            satellite = {
                satellite_id: telemetry.satellite_id,
                log: new Array(),
                barrels: new Array(),
            };
            this.statellites.push(satellite);
        }
        satellite.log.push({
            type: "TELEMETRY_RECEIVED",
            event_timestamp: telemetry.telemetry_timestamp
        });
        /**
         * Known Issue: This will not handle merging barrel error data.
         */
        // //add/remove barrels
        this.statellites.forEach(s => {
            telemetry.barrels.forEach(tb => {
                //does this satellite contain barrel, if so, where?
                const sbIdx = s.barrels.findIndex(sb => sb.barrel_id === tb.barrel_id);
                //barrel found
                if (sbIdx >= 0) {
                    //but its in the wrong satellite
                    if (s.satellite_id != telemetry.satellite_id) {
                        //remove it
                        s.barrels.splice(sbIdx);
                        s.log.push({
                            type: "BARREL_REMOVED",
                            event_timestamp: telemetry.telemetry_timestamp
                        });
                    }
                    else {
                        //and its in the right satellite, do nothing
                    }
                }
                else {
                    //barrel not found
                    if (s.satellite_id === telemetry.satellite_id) {
                        //and was missing, should be added
                        s.barrels.push(tb);
                        s.log.push({
                            type: "BARREL_ADDED",
                            event_timestamp: telemetry.telemetry_timestamp
                        });
                    }
                }
            });
        });
        return;
    }
    SetDeorbit(satellite_id) {
        const satellite = this.statellites.find(s => s.satellite_id === satellite_id);
        if (undefined !== satellite) {
            satellite.log.push({
                type: "DEORBIT_TRIGGERED",
                event_timestamp: Date.now()
            });
        }
    }
    SetDetonate(satellite_id) {
        const sIdx = this.statellites.findIndex(s => s.satellite_id === satellite_id);
        if (sIdx >= 0) {
            const satellite = this.statellites[sIdx];
            satellite.log.push({
                type: "DETONATE_TRIGGERED",
                event_timestamp: Date.now()
            });
            // delete from list?
            // this.statellites.splice(sIdx, 1)
        }
    }
    GetSatellites() {
        return this.statellites;
    }
}
exports.MemoryBackedDataStoreService = MemoryBackedDataStoreService;
//# sourceMappingURL=DataStoreService.js.map