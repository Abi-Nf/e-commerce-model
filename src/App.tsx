import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </Router>
  );
};
