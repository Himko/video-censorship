import { IEvent } from "../../reducers/interfaces"

export const findCurrentEvents = (player: HTMLVideoElement, list: IEvent[]) => {
	return list.reduce((acc: number[], event) => {
		const eventTime = toCorrectTimeFromTimestamp(event.timestamp)
		const playerTime = toCorrectTimeFromPlayer(player.currentTime)

		if (
			eventTime ===
			playerTime
		) {
			return [...acc, event.id];
			
		} else if (
			!acc?.includes(event.id) &&
			playerTime >
			eventTime &&
			playerTime <
			eventTime +
			toCorrectTimeFromTimestamp(event.duration)
		) {
			return [...acc, event.id];
			
		}

		return acc;
	}, [])
};

export const toCorrectTimeFromTimestamp = (timestamp: number) => Number((timestamp / 1000).toFixed(2));
export const toCorrectTimeFromPlayer = (playerTime: number) => Number(playerTime.toFixed(2))