import { Container } from './styles';

import VerticalChart from '../VerticalChart';

const ExpandedCard = ({ jogador }) => {

    return (
        <Container>
            <div className="container-status">
                <div className='jogador-img'>
                    <img src={`/jogadores/${jogador.foto}`} alt={jogador.foto} />
                </div>
                <div className="jogador-info">
                    <div className="jogador-container">
                        <p>{jogador.posicao}</p>
                        <p>{`${jogador.idade} anos`}</p>
                    </div>
                    <div className="jogador-status">
                        <div className="status-legend">
                            <p>Jogos</p>
                            <p>Gols</p>
                        </div>
                        <div className="status-data">
                            <VerticalChart jogos={jogador.jogos} gols={jogador.gols} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-texto">
                <p className="text-titulo">{jogador.nome}</p>
                <div className="texto-box">
                    <p>{jogador.texto}</p>
                </div>

            </div>
        </Container>
    );
}

export default ExpandedCard;