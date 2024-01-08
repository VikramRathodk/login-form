import './App.css';
import LoginForm from './login_form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard';


function App() {
  return (
    <>
    <div className='App'>
    <Router>
      
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </Router>
      </div>
    </>
  );
}

export default App;