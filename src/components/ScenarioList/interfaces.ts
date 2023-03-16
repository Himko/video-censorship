import { IScenarioState } from "../../reducers/interfaces";

export interface IScenarioList {
	list: IScenarioState['list'],
	activeEventIds: number[];
  playOnSelectedEvent: (eventId: number) => void
}