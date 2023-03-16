import { takeLatest, call, put } from "redux-saga/effects";
import { GET_LIST } from "../actions/actionTypes";
import { getListSuccess, getListError } from "../actions/scenarioActions";
import { IScenarioState } from "../reducers/interfaces";
import { fetchScenarioList } from "./fetchUtils";

export function* initSaga() {
	yield takeLatest(GET_LIST, doLoadList);
}

export function* doLoadList() {
	try {
		const data: IScenarioState['list'] = yield call(fetchScenarioList, 'http://www.mocky.io/v2/5e60c5f53300005fcc97bbdd');
		const filteredData = data.sort((a, b) => a.timestamp - b.timestamp);
		yield put(getListSuccess(filteredData));
	} catch (e) {
		yield put(getListError());
	}
}