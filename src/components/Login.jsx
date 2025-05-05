import { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, senha);
            navigate('/principal');
        } catch {
            alert('Usuário não está cadastrado ou senha incorreta');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input placeholder="Email" onChange={e => setEmail(e.target.value)} /><br />
            <input type="password" placeholder="Senha" onChange={e => setSenha(e.target.value)} /><br />
            <button onClick={login}>Entrar</button>
        </div>
    );
}
