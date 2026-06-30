import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import App from '../../src/App';

describe('App', () => {
    it('should render welcome to Gitlab CI', () => {
        render(<App/>);

        const heading = screen.getByText("Welcome to Gitlab CI!!!!!");
        expect(heading).toBeInTheDocument();

        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    });

    // it('should change the text of the button when it is clicked', async () => {
    //     const button = screen.getByRole('button');
    //     const user = userEvent.setup();
    //     await user.click(button);
        
    //     expect(button).toHaveTextContent('1');
    // });
})