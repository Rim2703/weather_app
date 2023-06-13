import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import WeatherDisplay from './components/WeatherDisplay';
import WeatherForm from './components/WeatherForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<WeatherForm />} />
          <Route exact path="/weather/:city" element={<WeatherDisplay />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
