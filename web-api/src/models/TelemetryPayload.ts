import * as jsonschema from 'jsonschema';
import { Telemetry } from './Telemetry';


export class TelemetryPayload {
    payloadJsonString: string;
    

    public static isValid(telemetryPayload: TelemetryPayload): boolean {
        //TODO

         //TODO: validate json string
            // const validator = new jsonschema.Validator();
            // const schema = {
            //     "type" : "object",
            //     "properties" : {
            //         "users" : {
            //             "type" : "array", // remember that arrays are objects
            //             "items" : { // "items" represents the items within the "users" array
            //                 "type" : "object",
            //                 "properties" : {
            //                     "id": { "type": "number" },
            //                     "username": { "type" : "string" },
            //                     "numPosts": { "type" : "number" },
            //                     "realName": { "type" : "string", optional: true }
            //                 }
            //             }
            //         }
            //     }
            // };

            // telemetryPayload: TelemetryPayload


        return true;
    }

    public static getTelemetry(telemetryPayload: TelemetryPayload): Telemetry {
        const telemetry = JSON.parse(telemetryPayload.payloadJsonString) as Telemetry;
        return telemetry;
    }

               
}