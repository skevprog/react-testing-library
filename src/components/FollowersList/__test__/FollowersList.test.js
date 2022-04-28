import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

describe('Follower List', () => {
    const MockFollowerList = (<BrowserRouter><FollowersList /></BrowserRouter>);

    test('Should render follower element', async () => {
        render(MockFollowerList);
        const followerElement = await screen.findByTestId('follower-item-0');
        expect(followerElement).toBeInTheDocument();
    });

    test('Should render followers List', async () => {
        render(MockFollowerList);
        const followerElement = await screen.findAllByTestId(/follower-item/i);
        expect(followerElement.length).toBe(5);
    });
});
