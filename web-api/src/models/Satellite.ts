import { Barrel } from "./Barrel";

export interface Satellite {
    satellite_id: number;
    barrels?: Array<Barrel>;
    log?: Array<SatelliteEvent>;
}

export type SatelliteEventTypes = 'TELEMETRY_RECEIVED' | 'BARREL_ADDED' | 'BARREL_REMOVED' | 'DEORBIT_TRIGGERED' | 'DETONATE_TRIGGERED'

export interface SatelliteEvent {
    type: SatelliteEventTypes;
    event_timestamp: number;
}

// export interface TelemetryReceivedSatelliteEvent extends SatelliteEvent {
//     type: 'TELEMETRY_RECEIVED'
// }

// export interface BarrelAddedSatelliteEvent extends SatelliteEvent {
//     type: 'BARREL_ADDED';
//     barrel: Barrel;
// }

// export interface BarrelRemovedSatelliteEvent extends SatelliteEvent {
//     type: 'BARREL_REMOVED';
//     barrel: Barrel;
// }

// export interface DeorbitTriggeredSatelliteEvent extends SatelliteEvent {
//     type: 'DEORBIT_TRIGGERED';
// }

// export interface DetonateTriggeredSatelliteEvent extends SatelliteEvent {
//     type: 'DETONATE_TRIGGERED';
// }