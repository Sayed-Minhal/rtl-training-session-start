import { render, screen } from "@testing-library/react";
import SimpleComponent from "./SimpleComponent";

describe('## UI Tests ##', () => {
    it('>> should render the component successfully', () => {
        render(<SimpleComponent />);
        const testTarget = screen.getByText(/Simple Component/i);
        expect(testTarget).toBeInTheDocument();
    });
});