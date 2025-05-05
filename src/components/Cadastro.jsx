import React, { useState } from "react";
import { auth } from "../firebase";

function Cadastro() {
    // Estados para armazenar e-mail e senha
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    // Função que lida com o cadastro de usuários
    const cadastrarUsuario = async () => {
        try {
            await auth.createUserWithEmailAndPassword(email, senha);
            setMensagem("Usuário cadastrado com sucesso!");
        } catch (erro) {
            setMensagem("Erro ao cadastrar: " + erro.message);
        }
    };

    return (
        <div>
            <h2>Cadastro</h2>
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
            <button onClick={cadastrarUsuario}>Cadastrar</button>
            <p>{mensagem}</p>
        </div>
    );
}

export default Cadastro;
