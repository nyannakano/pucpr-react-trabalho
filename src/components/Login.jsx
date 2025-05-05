import React, { useState } from "react";
import { auth } from "../firebase";

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    // Função de login de usuário
    const logarUsuario = async () => {
        try {
            await auth.signInWithEmailAndPassword(email, senha);
            setMensagem("Login realizado com sucesso!");
        } catch (erro) {
            setMensagem("Erro ao fazer login: " + erro.message);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /><br />
            <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            /><br />
            <button onClick={logarUsuario}>Entrar</button>
            <p>{mensagem}</p>
        </div>
    );
}

export default Login;
