import { Route } from "react-router-dom";

import "./styles/index.css";

import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import ProfilePage from "./components/profilePage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Route path="/register" component={RegistrationForm} />
      <Route path="/login" component={LoginForm} />
      <PrivateRoute path="/" component={ProfilePage} />
    </div>
  );
}

export default App;
