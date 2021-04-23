import { Route } from "react-router-dom";

import "./styles/index.css";

import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <Route path="/register" component={RegistrationForm}/>
      <Route path="/login" component={LoginForm}/>
    </div>
  );
}

export default App;
