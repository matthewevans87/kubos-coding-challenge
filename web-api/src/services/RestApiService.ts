import * as express from 'express'
import * as bodyParser from 'body-parser'
import { DataStoreService } from './DataStoreService';
import { TelemetryPayload } from '../models/TelemetryPayload';

export class RestApiService {
    
    private expressApp: express.Express;

    constructor(private dataStoreService: DataStoreService){
    }

    public InitWebServer(): void {
        //Init new Express server
        this.expressApp = express();
        this.expressApp.use(bodyParser.json());

        //Enable CORS
        this.expressApp.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        
        // Configure Routes
        this.expressApp.post('/processTelemetry', (req, res) => {
            const telemetryPayload = <TelemetryPayload>(req.body);
            
            if (TelemetryPayload.isValid(telemetryPayload)) {
                this.dataStoreService.ProcessTelemetry(TelemetryPayload.getTelemetry(telemetryPayload));
            } else {
                res.status(500);
            }
            
            // res.send(this.dataStoreService.GetSatellites())
        });

        this.expressApp.post('/getSatellites', (req, res) => {
            res.send(this.dataStoreService.GetSatellites())
        });
        
        this.expressApp.listen(3001, () => console.log('REST API Listening on port 3001'));

    }
}
