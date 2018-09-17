import { FlattenedBarrel } from "../models/FlattenedBarrel";

export const UPDATE_BARREL_DATA = 'UPDATE_BARREL_DATA'
export type UPDATE_BARREL_DATA = typeof UPDATE_BARREL_DATA;

export interface UpdateBarrelDataAction {
    type: UPDATE_BARREL_DATA;
    flattenedBarrels: Array<FlattenedBarrel>
}

export type MSAction = UpdateBarrelDataAction;