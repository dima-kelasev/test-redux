const initialState = [  //создали глобальную переменную в виде массива куда задали значения
		'smells like spirit',
		'Enter Sendman'
]

export default function playlist( state = initialState, action ) {
  if (action.type === "ADD_TRACK") {   // если тип action равен типу который мы передали в массив,а это "ADD_TRACK"
    return [   // то возвращаем новый массив
      ...state,  //копируем его при помощи метода sprad(...nameArray) создаем копию массива
      action.playload  //  и добавляем action со вторым типом("palyload"), из обьекта который мы стрельнули через функцию dispatch()
		];
  } else if (action.type === 'DELETE_TRACK') {
    return state;
  } 
  return state;
}