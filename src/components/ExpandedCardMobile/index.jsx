import { Container } from './styles';

import Chart from '../Chart';

const ExpandedCardMobile = ({ jogador }) => {

    return (
        <Container>
            <div className='container-status'>
                <div className='jogador-img'>
                    <img src={`/jogadores/${jogador.foto}`} alt={jogador.foto} />
                </div>
                <div className="jogador-info">
                    <div className="jogador-container">
                        <p>{jogador.nome}</p>
                        <p>{`${jogador.posicao} | ${jogador.idade} anos`}</p>
                    </div>
                    <div className="jogador-status">
                        <div className="status-legend">
                            <p>Jogos</p>
                            <p>Gols</p>
                        </div>
                        <div className="status-data">
                            <Chart jogos={jogador.jogos} gols={jogador.gols} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-texto">
                <div className="texto-box">
                    <p>{jogador.texto}</p>
                </div>

            </div>
        </Container>
    );
}

export default ExpandedCardMobile;