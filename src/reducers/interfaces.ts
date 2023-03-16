interface IEventZone {
	left: number;
	top: number;
	width: number;
	height: number;
}

export interface IEvent {
	id: number;
	timestamp: number;
	duration: number;
	zone: IEventZone
}

export interface IScenarioState {
	list: IEvent[],
	isFetching: boolean;
}