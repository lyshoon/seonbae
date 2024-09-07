
import './App.css';
import Homepage from './Components/Homepage/homepage.jsx';
import LoginSignup from './Components/LoginSignup/LoginSignup.jsx';
import Info from './Components/Info/Info.jsx'; 

function App() {
  return (
    <div>
      <LoginSignup />
      <Homepage />
      <Info /> 
    </div>
  );
}

export default App;
