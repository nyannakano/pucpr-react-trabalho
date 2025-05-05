import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from './components/Cadastro';
import Login from './components/Login';
import Principal from './components/Principal';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/principal" element={<Principal />} />
            </Routes>
        </BrowserRouter>
    );
}
