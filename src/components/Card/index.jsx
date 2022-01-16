import { Container } from './styles';

import Chart from '../Chart';

const Card = ({ jogador }) => {

    return (
        <Container>
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
        </Container>
    );
}

export default Card;