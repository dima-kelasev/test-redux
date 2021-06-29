import * as React from 'react';
import './style/App.css';
import Input from './components/input/index';
import {useDispatch, useSelector} from "react-redux";
import {Container, Delete, List} from './style/styled';
import {ChangeEvent} from "react";
import icon from './images/delete.png'


const App: React.FC = () => {
    const [valueInput, setValueInput] = React.useState<string>('');
    const dispatch = useDispatch();
    //@ts-ignore
    const todos = useSelector(state => state.tracks.tracks);

    const addTodo = () => {
        const array = {
            name: valueInput,
            id: Date.now()
        }
        dispatch({type: 'ADD_TRACK', payload: array});
        setValueInput('');
    }

    const deleteItem = (id: any) => {
        dispatch({ type: 'DELETE_ITEM', payload: id.target.id})
    }

    return (
       <div className='app'>
          <div>
              <Input
                value={valueInput}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setValueInput(e.currentTarget.value) }
                onClick={addTodo}
                text={'Add Smth'}
              />

          </div>

          <ul>
            {todos.map((item: any, index: number) => (
                <Container key={index}>
                    <List id={item.id} className='list' >{item.name}</List>
                    <Delete onClick={deleteItem} ><img id={item.id} src={icon}/></Delete>
                </Container>

            ))}
          </ul>
       </div>
    )
}
export default React.memo(App);
