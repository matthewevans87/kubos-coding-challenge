"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataStoreService {
    constructor() {
    }
    Update(jsonPayload) {
        //perform update
        //TODO
    }
    GetSatellites() {
        //TODO
        const dummyData = [
            {
                satellite_id: 1,
                barrels: [
                    {
                        barrel_id: 1,
                        last_flavor_sensor_result: 'woody',
                        status: 'aging'
                    }
                ]
            }
        ];
        return dummyData;
    }
}
exports.DataStoreService = DataStoreService;
//# sourceMappingURL=DataStoreService.js.map