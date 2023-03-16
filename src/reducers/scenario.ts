import { GET_LIST, GET_LIST_ERROR, GET_LIST_SUCCESS } from "../actions/actionTypes";
import { IScenarioState } from "./interfaces";



const initState: IScenarioState = {
	list: [],
	isFetching: false
}

export const scenarioReducer = function (state = initState, action: any) {
	switch (action.type) {
		
		case GET_LIST:
			return { ...state, isFetching: true };
		case GET_LIST_SUCCESS:
			return { ...state, list: action.payload, isFetching: false };
		case GET_LIST_ERROR:
			return { ...state, currentScenarioId: action.payload, isFetching: false};
    default:
      return state;
  }
};