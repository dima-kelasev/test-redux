const initialState = [  //создали глобальную переменную в виде массива куда задали значения
		'my home playlist',
		'my work playlist'
	];
 
 
 
 //3. создали функцию которая передается в createStore и меняет его
 // // эта функция принимает два аргумента, пустой массив = statte[] и action
 function playlist( state = initialState, action ) {
	if (action.type === 'ADD_PLAYLIST') {
		 return state;
	 }else if (action.type === 'DELETE_PLAYLIST') {
		 return state;
	 }
	 return state;
 }