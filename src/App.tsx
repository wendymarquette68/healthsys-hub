import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HITQuality from './pages/HITQuality';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hit-quality/*" element={<HITQuality />} />
      </Routes>
    </BrowserRouter>
  );
}
