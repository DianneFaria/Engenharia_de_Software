import './style.css';
import { useNavigate  } from 'react-router-dom';

const Voluntariado: React.FC = () => {

    const navigate = useNavigate();

    return (
        <form className='container'>
            <form className='container_voluntariado'>
                <div className='top_container'>
                    <div className='seta'>
                        <label htmlFor=''> ← </label>
                    </div>
                    <div className='top'>
                        <label htmlFor=''>Voluntariado</label>
                    </div>
                </div>

                <div className='fundo'>
                    <div className='titulo'>
                        <label htmlFor=''>Arrecadação de alimentos</label>
                    </div>
                    <div className='texto'>
                        <label htmlFor=''>A arrecadação de alimentos consiste em arrecadar alimentos para o orfanato Luz da Lua, que está enfrentando dificuldades em conseguir alimentos para as crianças. Você irá ajudar com a arrecadação em seu bairro ou arrecadação em super mercados. Os tipos de alimentos que deverão ser arrecadados são produtos não perecíveis.</label>
                    </div>
                    <button className="button_inscrever">Inscrever-me</button>
                </div>

                <div className='fundo'>
                    <div className='titulo'>
                        <label htmlFor=''>Adoção de animais</label>
                    </div>
                    <div className='texto'>
                        <label htmlFor=''>A adoção de animais consiste em participar de eventos de exposição de animais que estão sem lar e precisam ser adotados, esses eventos são agendados com antecedência. Os animais que irão parar adoção são cães e gatos.</label>
                    </div>
                    <button className="button_inscrever">Inscrever-me</button>
                </div>

                <div className='fundo'>
                    <div className='titulo'>
                        <label htmlFor=''>Distribuição de recursos</label>
                    </div>
                    <div className='texto'>
                        <label htmlFor=''>A distribuição de recursos consiste em distribuir recursos que serão fornecidos para moradores em situação de rua. Esses recursos variam de acordo com a estação do ano variando entre cobertores, roupas e comida.</label>
                    </div>
                    <button className="button_inscrever">Inscrever-me</button>
                </div>
            </form>
            <button className="button_inscrever" onClick={() => navigate('/treinamento')}>Treinamento</button>
        </form>
    )
};

export default Voluntariado;