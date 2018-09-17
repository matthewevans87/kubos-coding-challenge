import { StoreState } from "../types/StoreState";
import { UpdateBarrelDataAction, UPDATE_BARREL_DATA } from "../actions";

export function reduceState(state: StoreState, action: UpdateBarrelDataAction): StoreState {
    
    switch (action.type) {
        case UPDATE_BARREL_DATA: {
            return {
                ...state,
                flattenedBarrels: action.flattenedBarrels
            }
        }
    } 

    return state;
}