import React from 'react';
import './Styles/root.css';
import routes from './routes';
import Header from './Components/Header/Header';

class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <Header/>
        {routes}
      </div>
    )
  }
  
}

export default App;
