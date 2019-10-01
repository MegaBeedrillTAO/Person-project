import React from 'react';
import './Styles/root.css';
import routes from './routes';
import Header from './Components/Header/Header';
import Footer from './Components/Header/Footer';

class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <Header/>
        {routes}
        <Footer/>
      </div>
    )
  }
  
}

export default App;
