import { IScenarioState } from "../reducers/interfaces";

export const fetchScenarioList = async (url:string) => {
	const response = await fetch(url);
	const responseText = await response.text();
	const responseJson: IScenarioState['list'] =
		responseText.length > 0 ? JSON.parse(responseText) : null;
	
	return responseJson;
}