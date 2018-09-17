import { MemoryBackedDataStoreService } from "./services/DataStoreService";
import { RestApiService } from "./services/RestApiService";

export class WebAPI {

    public static async main() {

        const dataStoreService = new MemoryBackedDataStoreService();
        const restApiService = new RestApiService(dataStoreService);
        
        restApiService.InitWebServer();

        return;
    }
    
}

WebAPI.main();