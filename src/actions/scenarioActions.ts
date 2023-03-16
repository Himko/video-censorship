import { IScenarioState } from "../reducers/interfaces";
import { GET_LIST, GET_LIST_ERROR, GET_LIST_SUCCESS } from "./actionTypes";

export const getList = () => ({
	type: GET_LIST
});

export const getListSuccess = (scenarioList: IScenarioState['list']) => ({
	type: GET_LIST_SUCCESS,
	payload: scenarioList
});

export const getListError = () => ({
	type: GET_LIST_ERROR,
});