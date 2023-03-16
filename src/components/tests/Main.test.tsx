import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Main } from '../Main/Main';
import { Provider } from 'react-redux';
import { store } from '../../configureStore';
import user from '@testing-library/user-event';

describe('Mount Application', () => {
    it('click to open video and load list', async () => {
        render(
            <Provider store={store}>
                <Main />
            </Provider>
        );

        expect(screen.getByText(/Show video/)).toBeInTheDocument();

        expect(user.click(screen.getByText(/Show video/)));
        await waitFor(() => {
            const player = screen.getByTestId('video-player');
            expect(player).toBeInTheDocument();
            const firstListItem = screen.getByText(/Event id: 8/);
            expect(firstListItem).toBeInTheDocument();
        });
    });
});
