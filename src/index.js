import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';   //1. имортировали провайдера
import { createStore, applyMiddleware} from 'redux'  //и снова createStore
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';


const initialState = []; //создали глобальную переменную в виде массива куда задали значения

//3. создали функцию которая передается в createStore и меняет его
// // эта функция принимает два аргумента, пустой массив = statte[] и action
function playlist( state = initialState, action ) {
  if (action.type === "ADD_TRACK") {   // если тип action равен типу который мы передали в массив,а это "ADD_TRACK"
    return [    // то возвращаем новый массив
      ...state,  //копируем его при помощи метода sprad(...nameArray) создаем копию массива
      action.playload  //  и добавляем action со вторым типом("palyload"), из обьекта который мы стрельнули через функцию dispatch()
    ]
  }
  return state;
}
// 2. создали Store при помощи createStore() которая принимает в себя аргумент - функцию
const store = createStore(playlist, composeWithDevTools(applyMiddleware(thunk))); 

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>  {/*сделали провайдером корневой компонент 'App' через котрый передаем весь глобальный Store store={store} */}
    <App />
  </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);



// store.subscribe(() => { //4. подписались функцией subscribe на изминения в нашем  Store
//   console.log('subscribe', store.getState())  // и выводим в консоль если что то поменялось
//   list.innerHTML = '';  //отчищаем массив
//   trackInput.value='';  //отчищаем поле ввода
//   store.getState().forEach(track => {  //проходимся циклом по нашему  Store 
//     const li = document.createElement('li');  //и выводим новый жлемент <li>
//     li.textContent = track; //со значением взятым из input'a 
//     list.appendChild(li);
//   })
// })
                                                         // после этого функция playlist() об этом узнает, меняет данные в сторе и возвращает нам новую копию  Store