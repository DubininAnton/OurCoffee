import { Component } from 'react';
import './App.scss';
import OurCoffee from '../ourCoffee/ourCoffee'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <OurCoffee />
      </div>
    );
  }
}

export default App;
