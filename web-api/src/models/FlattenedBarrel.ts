export interface FlattenedBarrel {
    satellite_id: number;
    barrel_id: number;
    last_flavor_sensor_result: string;
    status: string;
    errors?: string;
    update_age: number;
}