import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
