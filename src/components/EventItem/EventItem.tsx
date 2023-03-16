import { IEventItem } from './interfaces';
import { Item } from './styles';
import { makeCorrectTime } from './utils';

export const EventItem = ({
    id,
    timestamp,
    isActive,
    playOnSelectedEvent,
}: IEventItem) => {
    return (
        <Item isActive={isActive} onClick={() => playOnSelectedEvent(id)}>
            <span>Event id: {id} </span>| time: {makeCorrectTime(timestamp)}
        </Item>
    );
};
