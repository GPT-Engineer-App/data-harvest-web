import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Results from "./pages/Results.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/results" element={<Results />} />
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
