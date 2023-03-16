import { IEvent } from "../../reducers/interfaces";
import { IScenarioList } from "../ScenarioList/interfaces";

export interface IEventItem extends IEvent {
	playOnSelectedEvent: IScenarioList['playOnSelectedEvent'];
	isActive: boolean;
}