import { useState, useEffect } from 'react';
import { Main } from './styles';

import elencoJSON from '../../assets/elenco-palmeiras.json';

const Home = () => {
    const [jogadores, setJogadores] = useState([]);
    const [posicoes, setPosicoes] = useState([]);
    const [idades, setIdades] = useState([]);
    const [sorter, setSorter] = useState('Todas as idades');
    const [filter, setFilter] = useState('Todos as posições');
    // const [editorias, setEditorias] = useState([]);


    useEffect(() => {
        const posicoes = [
            'Goleiro',
            'Zagueiro',
            'Lateral Direito',
            'Lateral Esquerdo',
            'Volante',
            'Meia',
            'Atacante',
            'Treinador'
        ]

        setPosicoes(posicoes);
    }, []);

    useEffect(() => {
        const idades = [
            '0-19',
            '20-29',
            '30-39',
            '40-49'
        ]

        setIdades(idades);
    }, []);

    useEffect(() => {
        setJogadores([]);
        if (filter !== 'Todos as posições') {
            const filteredJogadores = elencoJSON.filter(
                jogador => jogador.posicao === filter
            );

            let sortedJogadores;

            if (sorter === 'Todas as idades') {
                sortedJogadores = filteredJogadores;
            } else {
                const rangeIdade = sorter.substring(0, 5).trim().split('-');
                const idade1 = parseInt(rangeIdade[0]);
                const idade2 = parseInt(rangeIdade[1]);

                sortedJogadores = filteredJogadores.filter(
                    jogador => jogador.idade >= idade1 && jogador.idade <= idade2
                );
            }

            setJogadores(sortedJogadores);
        } else {
            const arrJogadores = [elencoJSON];

            let sortedJogadores;

            if (sorter === 'Todas as idades') {
                sortedJogadores = arrJogadores;
            } else {
                const rangeIdade = sorter.substring(0, 5).trim().split('-');
                const idade1 = parseInt(rangeIdade[0]);
                const idade2 = parseInt(rangeIdade[1]);

                sortedJogadores = arrJogadores.filter(
                    jogador => jogador.idade >= idade1 && jogador.idade <= idade2
                );
            }

            setJogadores(sortedJogadores);
        }
    }, [filter, sorter]);

    const handleFilter = (value) => {
        setFilter(value);
    };

    const handleSorting = (value) => {
        setSorter(value);
    };

    return (
        <>
            <Main>
                <section id="hero">
                    <div className="hero-box">
                        <div className="hero-title">
                            <h1><span>O ELENCO DO</span> <span>CAMPEÃO</span></h1>
                            <p>CONHEÇA OS JOGADORES DO PALMEIRAS, VENCEDOR DA LIBERTADORES 2021</p>
                            <p>PUBLICADO EM 03.08.2021 • ATUALIZADO EM 04.08.2021</p>
                            <p>
                                Na conquista do tricampeonato da Libertadores pelo Palmeiras, candidatos a herói do título não faltaram.
                                O carioca Deyverson de 30 anos saiu do banco na prorrogação para marcar o gol da vitória por 2 a 1 sobre o Flamengo e ser eleito o melhor do jogo.
                                Com defesas importantes, Weverton também pode ser considerado um dos protagonistas do confronto.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="menu">
                    <div className="menu-box">
                        <div className="selects">
                            <div className="select-wrapper">
                                <select onChange={e => handleFilter(e.target.value)}>
                                    <option>Todos as posições</option>
                                    {posicoes.map(posicao => {
                                        return <option>{posicao}</option>;
                                    })}
                                </select>
                            </div>
                            <div className="select-wrapper">
                                <select onChange={e => handleSorting(e.target.value)}>
                                    <option>Todas as idades</option>
                                    {idades.map(idade => {
                                        return <option>{idade} anos</option>;
                                    })}
                                </select>
                            </div>
                        </div>
                        <div>
                            <div>
                                <input type="checkbox" id="scales" />
                                <label htmlFor="scales">Scales</label>
                            </div>
                            <div>
                                <input type="checkbox" id="scales" />
                                <label htmlFor="scales">Scales</label>
                            </div>
                        </div>
                    </div>
                </section>
            </Main>
        </>
    );
}

export default Home;