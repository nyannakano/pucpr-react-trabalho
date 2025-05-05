import { useState } from 'react';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
    const [form, setForm] = useState({ email: '', senha: '', nome: '', sobrenome: '', nascimento: '' });
    const navigate = useNavigate();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const cadastrar = async () => {
        try {
            const { user } = await createUserWithEmailAndPassword(auth, form.email, form.senha);
            await setDoc(doc(db, 'usuarios', user.uid), {
                uid: user.uid,
                nome: form.nome,
                sobrenome: form.sobrenome,
                nascimento: form.nascimento,
                email: form.email
            });
            alert('Cadastro realizado!');
            navigate('/login');
        } catch (e) {
            alert('Erro ao cadastrar: ' + e.message);
        }
    };

    return (
        <div>
            <h1>Cadastro</h1>
            <input name="email" placeholder="Email" onChange={handleChange} /><br />
            <input name="senha" type="password" placeholder="Senha" onChange={handleChange} /><br />
            <input name="nome" placeholder="Nome" onChange={handleChange} /><br />
            <input name="sobrenome" placeholder="Sobrenome" onChange={handleChange} /><br />
            <input name="nascimento" type="date" onChange={handleChange} /><br />
            <button onClick={cadastrar}>Cadastrar</button>
        </div>
    );
}
