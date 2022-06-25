import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

describe('## UI Tests ##', () => {
    it('>> should render the component successfully', () => {
        render(<ErrorMessage message="Error Message"/>);
        const testTarget = screen.getByText(/Error Message/i);
        expect(testTarget).toBeInTheDocument();
    });
});