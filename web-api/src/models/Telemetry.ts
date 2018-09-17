import { Satellite } from "./Satellite";

export interface Telemetry extends Satellite  {
    telemetry_timestamp: number;
}