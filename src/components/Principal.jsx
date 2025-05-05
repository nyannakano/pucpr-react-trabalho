import { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function Principal() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const carregarDados = async () => {
            const user = auth.currentUser;
            if (user) {
                const docSnap = await getDoc(doc(db, 'usuarios', user.uid));
                if (docSnap.exists()) {
                    setUserData(docSnap.data());
                }
            }
        };
        carregarDados();
    }, []);

    return (
        <div>
            <h1>Dados do Usuário</h1>
            {userData ? (
                <div>
                    <p>Nome: {userData.nome}</p>
                    <p>Sobrenome: {userData.sobrenome}</p>
                    <p>Data de Nascimento: {userData.nascimento}</p>
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
}
