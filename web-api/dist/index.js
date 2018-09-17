"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataStoreService_1 = require("./services/DataStoreService");
const RestApiService_1 = require("./services/RestApiService");
class WebAPI {
    static async main() {
        const dataStoreService = new DataStoreService_1.MemoryBackedDataStoreService();
        const restApiService = new RestApiService_1.RestApiService(dataStoreService);
        restApiService.InitWebServer();
        return;
    }
}
exports.WebAPI = WebAPI;
WebAPI.main();
//# sourceMappingURL=index.js.map