import logo from './logo.svg';
import './App.css';
import RegistrationForm from './component/RegistrationForm';
import ShowData from './component/ShowData';
import {BrowserRouter,Switch ,Route } from 'react-router-dom';



function App() {
  return (

    <BrowserRouter>
    <div className="App">

    <Switch>
      <Route path="/" exact component={RegistrationForm}></Route>
      <Route path="/ShowData" exact component={ShowData} ></Route>
      </Switch>
    </div>

    </BrowserRouter>
  );
}

export default App;
