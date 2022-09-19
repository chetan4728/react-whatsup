import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from "./pages/main";
function App() {
  return (
    <Router  basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/react-whatsup" exact element={<Main />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
