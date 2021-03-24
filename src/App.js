import React, { Component } from 'react';
import { connect } from 'react-redux'   // импортировали функцию  connect  которая оборачивает на экспортируемый компонент,



class App extends Component {
  addTrack() {
    console.log('Add Track', this.trackInput.value);
     this.props.onAddTrack(this.trackInput.value);
     this.trackInput.value= '';
  }
  render() {
    console.log(this.props.testStore)
    return (
      <div>
        <input type="text"  ref={(input) => { this.trackInput = input }}/>    {/* отрисовали рамзметку */}
        <button onClick={this.addTrack.bind(this)}>Add Track</button>
        <ul>
          {this.props.testStore.map((track, index) =>   
            <li key={index}>{track}</li>
          )}
        </ul>
      </div>
    )
  }
}


export default connect( // принимает на входе дву функции state и dispatch
  state => ({
    testStore: state   //передает взятый у корневого элемента props.state
  }),
  dispatch =>({
    onAddTrack: (trackName) => {
      dispatch({ type: 'ADD_TRACK', playload: trackName}) //добавляет в глобальный Store (initialState) новые
    }
  })
)(App);
