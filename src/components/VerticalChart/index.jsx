import { Container, VerticaltatusBar } from './styles';

const VerticalChart = ({ jogos, gols }) => {
    const maxJogos = 13;
    const maxGols = 6;
    const jogosPercent = ((100 * jogos) / maxJogos).toFixed(0);
    const golsPercent = ((100 * gols) / maxGols).toFixed(0);

    return (
        <Container>
            <div className="jogos-container">
                <p>{jogos}</p>
                <VerticaltatusBar width={jogosPercent} color={'#B4DDC1'} />
            </div>
            <div className="gols-container">
                <p>{gols}</p>
                <VerticaltatusBar width={golsPercent} color={'#72BF44'} />
            </div>
        </Container>
    );
}

export default VerticalChart;