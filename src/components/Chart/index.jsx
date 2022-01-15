import { Container, JogosBar } from './styles';

const Chart = ({ jogos, gols }) => {
    const maxJogos = 13;
    const maxGols = 6;
    const jogosPercent = ((100 * jogos) / maxJogos).toFixed(0);
    const golsPercent = ((100 * gols) / maxGols).toFixed(0);

    return (
        <Container>
            <div className="jogos-container">
                <JogosBar width={jogosPercent} color={'#B4DDC1'} />
                <p>{jogos}</p>
            </div>
            <div className="gols-container">
                <JogosBar width={golsPercent} color={'#72BF44'} />
                <p>{gols}</p>
            </div>
        </Container>
    );
}

export default Chart;