import { render } from "@testing-library/react";
import { BtnDelete } from "../../src/todos/components/BtnDelete";
// import { Todo } from "../../src/todos/Todo";



describe('Test on <Todo />', () => { 

    test('should of match with snapshot', () => {

        render( <BtnDelete /> )

    });

})