import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'
import api from '../../services/api'
import './styles.css';


import heroesImg from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';


function Logon() {
    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('session', { id })

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongNome', response.data.nome);

            history.push('/profile');
        } catch (err) {
            alert('Falha no login, tente novamente.')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImage} alt="Be the Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Sua ID"
                        value={id} onChange={e => setId(e.target.value)} />
                    <button type="submit" className="button">Entrar</button>
                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}

export default Logon;