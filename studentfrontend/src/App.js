import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"
import MainHub from "./components/MainHub/App"
import ClassesRegistration from "./components/ClassRegistration/App"
import AllClasses from "./components/AllClasses/App"


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route path="/Main" element={<MainHub />} />
          <Route path="/ClassRegister" element={<ClassesRegistration />} />
          <Route path="/AllClasses" element={<AllClasses />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
