import { fireEvent, render, screen } from "@testing-library/react";
import { BtnDelete } from "../../../src/todos/components/BtnDelete";



describe('Test on <BtnDelete />', () => { 
    
    const id = 53;
    const handleRemoveTodo = () => {};
    const loading = true;
    
    test('should of match with snapshot', () => {
        
        const { container } = render( <BtnDelete  id={id} loading={loading} handleRemoveTodo={handleRemoveTodo} /> );
        expect( container ).toMatchSnapshot();

    });

    test('should find text delete', () => {

        const { container, getByText, getByTestId } = render( <BtnDelete  id={id} loading={loading} handleRemoveTodo={handleRemoveTodo} /> );
        expect( getByTestId('test-delete').innerHTML ).toBe('Delete');
       
        // const btn = container.querySelector('button');
        // expect( getByText(btn.innerHTML) ).toBeTruthy();
        // expect( btn.innerHTML ).toBe('Delete');


    });

    test('Should find text delete with screen', () => {

        render( <BtnDelete id={id} loading={loading} handleRemoveTodo={handleRemoveTodo} /> );
        expect( screen.getByText('Delete') ).toBeTruthy();
        // screen.debug();

    });


    test('Should find text delete on button', () => {

        render( <BtnDelete id={id} loading={loading} handleRemoveTodo={handleRemoveTodo} /> );
        const dialogContainer = screen.getByRole('dialog');
        // console.log(dialogContainer.innerHTML);
        expect( dialogContainer.innerHTML ).toBe('Delete');
        // screen.debug();

    });

    test('should simulate event click on button Delete', () => { 

        render( <BtnDelete id={id} loading={loading} handleRemoveTodo={handleRemoveTodo} /> );
        fireEvent.click( screen.getByText('Delete') );
        fireEvent.click(screen.getByRole('dialog', { name: 'btn-delete' }));


        
    });

})