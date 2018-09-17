"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataStoreService_1 = require("./DataStoreService");
test('Should handle example data', () => {
    const ds = new DataStoreService_1.MemoryBackedDataStoreService();
    const telemetry = {
        "telemetry_timestamp": 1534198007,
        "satellite_id": 1,
        "barrels": [
            {
                "barrel_id": 1,
                "last_flavor_sensor_result": "woody",
                "status": "aging",
                "errors": []
            },
            {
                "barrel_id": 2,
                "last_flavor_sensor_result": "error",
                "status": "error",
                "errors": [
                    "RUD - barrel has exploded"
                ]
            },
            {
                "barrel_id": 3,
                "last_flavor_sensor_result": "spicy with a hint of radiation",
                "status": "ready",
                "errors": []
            }
        ]
    };
    ds.ProcessTelemetry(telemetry);
    expect(ds.GetSatellites().length).toBe(1);
    expect(ds.GetSatellites()[0].barrels.length).toBe(3);
});
test('Should handle updating example data', () => {
    const ds = new DataStoreService_1.MemoryBackedDataStoreService();
    const telemetry1 = {
        "telemetry_timestamp": 1534198007,
        "satellite_id": 1,
        "barrels": [
            {
                "barrel_id": 1,
                "last_flavor_sensor_result": "woody",
                "status": "aging",
                "errors": []
            },
            {
                "barrel_id": 2,
                "last_flavor_sensor_result": "error",
                "status": "error",
                "errors": [
                    "RUD - barrel has exploded"
                ]
            },
            {
                "barrel_id": 3,
                "last_flavor_sensor_result": "spicy with a hint of radiation",
                "status": "ready",
                "errors": []
            }
        ]
    };
    const telemetry2 = {
        "telemetry_timestamp": 1534198008,
        "satellite_id": 2,
        "barrels": [
            {
                "barrel_id": 4,
                "last_flavor_sensor_result": "woody",
                "status": "aging",
                "errors": []
            },
            {
                "barrel_id": 5,
                "last_flavor_sensor_result": "error",
                "status": "error",
                "errors": [
                    "RUD - barrel has exploded"
                ]
            },
            {
                "barrel_id": 3,
                "last_flavor_sensor_result": "spicy with a hint of radiation",
                "status": "ready",
                "errors": []
            }
        ]
    };
    ds.ProcessTelemetry(telemetry1);
    ds.ProcessTelemetry(telemetry2);
    const satellites = ds.GetSatellites();
    const s1 = satellites.find(s => s.satellite_id === 1);
    const s2 = satellites.find(s => s.satellite_id === 2);
    expect(satellites.length).toBe(2);
    expect(s1.barrels.length).toBe(2);
    expect(s2.barrels.length).toBe(3);
});
//# sourceMappingURL=DataStoreService.test.js.map