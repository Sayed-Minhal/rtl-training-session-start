import {render, screen, fireEvent} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import RegistrationForm from './RegistrationForm.jsx';

describe('UI Tests', () => {
    const onSubmitHandler = jest.fn();
    it('Should verify if the form element exists', () => {
        render(<RegistrationForm  onSubmitHandler={onSubmitHandler}/>);
        expect(screen.getByTestId('registrationForm')).toBeInTheDocument();
    });

    it('Should verify the form element and its children with developer radio button', async () => {
        render(<RegistrationForm onSubmitHandler={onSubmitHandler} />);
        const formElement = screen.getByRole('form');
        const submitBtn = screen.getByRole('button');
        const firstName = screen.getByLabelText(/First Name/i);
        const teamRoleDeveloper = screen.getByLabelText(/Developer/i);
        const teamRoleTester = screen.getByLabelText(/Tester/i);
        expect(submitBtn.textContent).toBe('Register');
        
        await act(()=>{
            fireEvent.change(firstName, {target:{value:'Sayed'}});
            fireEvent.click(teamRoleDeveloper);
            fireEvent.click(submitBtn,{
                preventDefault : jest.fn(), 
                firstName: firstName.value, 
                teamRole: teamRoleDeveloper.value 
            });
            expect(firstName.value).toBe('Sayed');
            expect(teamRoleDeveloper).toBeChecked();
            expect(teamRoleTester).not.toBeChecked();
            expect(onSubmitHandler).toHaveBeenCalled();
            expect(onSubmitHandler).toHaveBeenCalledWith({firstName: 'Sayed', teamRole:'developer'});
        });
        
    });

    it('Should verify the form element and its children with tester radio button', async () => {
        render(<RegistrationForm onSubmitHandler={onSubmitHandler} />);
        const submitBtn = screen.getByRole('button');
        const firstName = screen.getByLabelText(/First Name/i);
        const teamRoleDeveloper = screen.getByLabelText(/Developer/i);
        const teamRoleTester = screen.getByLabelText(/Tester/i);
        expect(submitBtn.textContent).toBe('Register');
        
        await act(()=>{
            fireEvent.change(firstName, {target:{value:'Sayed'}});
            fireEvent.click(teamRoleTester);
            fireEvent.click(submitBtn,{
                preventDefault : jest.fn(), 
                firstName: firstName.value, 
                teamRole: teamRoleTester.value 
            });
            expect(firstName.value).toBe('Sayed');
            expect(teamRoleDeveloper).not.toBeChecked();
            expect(teamRoleTester).toBeChecked();
            expect(onSubmitHandler).toHaveBeenCalled();
            expect(onSubmitHandler).toHaveBeenCalledWith({firstName: 'Sayed', teamRole:'tester'});
        });
        
    });
});