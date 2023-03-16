import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../../actions/scenarioActions';
import { IScenarioState } from '../../reducers/interfaces';
import { ScenarioList } from '../ScenarioList/ScenarioList';
import { GreenBox, PlayerContainer, View } from './styles';
import { findCurrentEvents } from './utils';

export const Main = () => {
    const [isPlayerOpen, setPlayerVisible] = useState<boolean>(false);
    const [activeEventIds, setActiveEvents] = useState<number[]>([]);

    const playerRef = useRef<HTMLVideoElement>(null);
    const dispatch = useDispatch();

    const { isFetching, list } = useSelector((state: IScenarioState) => state);

    const isShowPlayer = isPlayerOpen && !isFetching;

    const showVideoPlayer = () => {
        dispatch(getList());
        setPlayerVisible(true);
    };

    useEffect(() => {
        const player = playerRef.current;
        let onPlayRequestFrame: number;

        if (player) {
            player.onplay = () => {
                let lastTime = Date.now();

                const findEventsInTimePeriod = () => {
                    if (Date.now() - lastTime >= 100) {
                        lastTime = Date.now();

                        const currentEvents = findCurrentEvents(player, list);

                        setActiveEvents((prevActiveEventIds) => {
                            if (
                                prevActiveEventIds.toString() !==
                                currentEvents.toString()
                            ) {
                                return currentEvents;
                            }
                            return prevActiveEventIds;
                        });
                    }
                    onPlayRequestFrame = window.requestAnimationFrame(
                        findEventsInTimePeriod
                    );
                };

                onPlayRequestFrame = window.requestAnimationFrame(
                    findEventsInTimePeriod
                );
            };

            player.onpause = () => {
                cancelAnimationFrame(onPlayRequestFrame);
            };

            player.onseeked = () => {
                const currentEvents = findCurrentEvents(player, list);

                setActiveEvents((prevActiveEventIds) => {
                    if (
                        prevActiveEventIds.toString() !==
                        currentEvents.toString()
                    ) {
                        return currentEvents;
                    }
                    return prevActiveEventIds;
                });
            };
        }
    }, [isShowPlayer, list]);

    const activeEvents = useMemo(
        () => list.filter((el) => activeEventIds.includes(el.id)),
        [activeEventIds, list]
    );

    const playOnSelectedEvent = (eventId: number) => {
        const player = playerRef.current;

        const selectedEvent = list.find((event) => event.id === eventId);
        if (player && selectedEvent) {
            player.currentTime = Number(
                (selectedEvent.timestamp / 1000).toFixed(2)
            );
        }
    };

    return (
        <div>
            {!isShowPlayer && (
                <button onClick={showVideoPlayer}>Show video</button>
            )}

            {isShowPlayer && (
                <View>
                    <PlayerContainer>
                        {activeEvents.map((event) => (
                            <GreenBox
                                key={event.id}
                                width={event.zone.width}
                                height={event.zone.height}
                                left={event.zone.left}
                                top={event.zone.top}
                            ></GreenBox>
                        ))}

                        <video
                            autoPlay
                            ref={playerRef}
                            controls
                            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                            data-testid="video-player"
                        />
                    </PlayerContainer>

                    <ScenarioList
                        list={list}
                        activeEventIds={activeEventIds}
                        playOnSelectedEvent={playOnSelectedEvent}
                    />
                </View>
            )}
        </div>
    );
};
