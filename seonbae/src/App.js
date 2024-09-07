import logo from './logo192.png';
import './App.css';
import SignUp from './SignUp';

import {ChakraProvider, Box} from "@chakra-ui/react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <ChakraProvider> 
      <Router>
        <Routes> 
          <Route path="/sign-up" element = {<SignUp />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
