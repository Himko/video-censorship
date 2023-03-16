import { IEvent } from '../../reducers/interfaces';
import { EventItem } from '../EventItem/EventItem';
import { IScenarioList } from './interfaces';
import { ListContainer } from './styles';

export const ScenarioList = ({
    list,
    activeEventIds,
    playOnSelectedEvent,
}: IScenarioList) => {
    return (
        <ListContainer>
            {list.map((el: IEvent) => {
                return (
                    <EventItem
                        key={el.id}
                        isActive={activeEventIds.includes(el.id)}
                        playOnSelectedEvent={playOnSelectedEvent}
                        {...el}
                    />
                );
            })}
        </ListContainer>
    );
};
