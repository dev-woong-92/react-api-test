import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginSuccess from './pages/LoginSuccess';
import RootPage from './pages/RootPage';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="login-success" element={<LoginSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
