"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TelemetryPayload {
    static isValid(telemetryPayload) {
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
    static getTelemetry(telemetryPayload) {
        const telemetry = JSON.parse(telemetryPayload.payloadJsonString);
        return telemetry;
    }
}
exports.TelemetryPayload = TelemetryPayload;
//# sourceMappingURL=TelemetryPayload.js.map