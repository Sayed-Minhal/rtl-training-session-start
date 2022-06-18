import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the component and takes snapshot', () => {
  const {container} = render(<App name={'Sayed'}/>);
  expect(container).toMatchSnapshot();
});
test('renders the title', () => {
  render(<App name='Minhal'/>);
  const divWithName = screen.getByText(/Hello, my name is Minhal/i)
  expect(divWithName).toBeInTheDocument();
});
