import { useState } from 'react';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
    const [form, setForm] = useState({ email: '', senha: '', nome: '', sobrenome: '', nascimento: '' });
    const [mensagem, setMensagem] = useState('');
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

            setMensagem('✅ Cadastro realizado com sucesso! Redirecionando...');
            setTimeout(() => navigate('/login'), 2000); // redireciona após 2 segundos
        } catch (e) {
            setMensagem('❌ Erro ao cadastrar: ' + e.message);
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
            {mensagem && <p style={{ color: mensagem.includes('Erro') ? 'red' : 'green' }}>{mensagem}</p>}
        </div>
    );
}
