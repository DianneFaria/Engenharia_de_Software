import React from 'react';
import './styles.css';
import logo from './logo.png';
import { useNavigate } from "react-router-dom";

const Treinamento: React.FC = () => {

    const navigate = useNavigate();

    return (
        <form className='container'>
            
            <form className='container_treinamento'>
                <div className='top_container'>
                    <div className='seta'>
                        <label htmlFor=''> ← </label>
                    </div>
                    <div className='top'>
                        <label htmlFor=''>Treinamento</label>
                    </div>
                </div>
                <div className='imagem'>
                        <img src={logo} alt='Logo' className='logo' /> 
                </div>
                <div className='titulo'>
                        <label htmlFor=''> Links de treinamento  </label>
                </div>
                <div className='texto'>
                        <label htmlFor=''> São preparatórios para participar das atividades vontuntárias </label>
                </div>
                <div className='titulo_link'>
                        <label htmlFor=''>Arrecadação de alimentos:</label>
                </div>
                <div className='link'>
                        <label htmlFor=''>www.arrecadacao.com.br</label>
                </div>
                <div className='titulo_link'>
                        <label htmlFor=''>Adoção de animais:</label>
                </div>
                <div className='link'>
                        <label htmlFor=''>www.adocao.com.br</label>
                </div>
                <div className='titulo_link'>
                        <label htmlFor=''>Distribuição de recursos:</label>
                </div>
                <div className='link'>
                        <label htmlFor=''>www.distribuicao.com.br</label>
                </div>
            </form>
            <button className="button_inscrever" onClick={() => navigate('/voluntariado')}>Voluntariado</button>
        </form>
    );
};

export default Treinamento;
