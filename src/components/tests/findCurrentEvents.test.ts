import { findCurrentEvents } from "../Main/utils"
import { listMock } from "./listMock"

const mockPlayer = { currentTime: 30.0 } as HTMLVideoElement;

describe('findCurrentEvents', () => {
	it('should find event with id 8 when player time will be 30 sec', () => {
		expect(findCurrentEvents(mockPlayer, listMock)).toEqual([8]);
	})
})
