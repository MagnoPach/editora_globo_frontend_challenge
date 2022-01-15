import { useState, useEffect } from 'react';
import { Main, Dropdown, Option } from './styles';

import Banner from '../../components/Banner';
import Checkbox from '../../components/Checkbox';
import Card from '../../components/Card';

import elencoJSON from '../../assets/elenco-palmeiras.json';

const Home = () => {
    const [jogadores, setJogadores] = useState([]);
    const [posicoes, setPosicoes] = useState([]);
    const [idades, setIdades] = useState([]);
    const [sorter, setSorter] = useState('Todas as idades');
    const [filter, setFilter] = useState('Todos as posições');
    const [checkGols, setGols] = useState(false);
    const [checkFinal, setFinal] = useState(false);
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

                if (checkGols || checkFinal) {
                    sortedJogadores = verficarCheckBox(sortedJogadores, checkGols, checkFinal);
                }
            } else {
                const rangeIdade = sorter.substring(0, 5).trim().split('-');
                const idade1 = parseInt(rangeIdade[0]);
                const idade2 = parseInt(rangeIdade[1]);

                sortedJogadores = filteredJogadores.filter(
                    jogador => jogador.idade >= idade1 && jogador.idade <= idade2
                );

                if (checkGols || checkFinal) {
                    sortedJogadores = verficarCheckBox(sortedJogadores, checkGols, checkFinal);
                }
            }
            console.log(sortedJogadores);
            setJogadores(sortedJogadores);
        } else {
            const arrJogadores = [...elencoJSON];

            let sortedJogadores;

            if (sorter === 'Todas as idades') {
                sortedJogadores = arrJogadores;

                if (checkGols || checkFinal) {
                    sortedJogadores = verficarCheckBox(sortedJogadores, checkGols, checkFinal);
                }
            } else {
                const rangeIdade = sorter.substring(0, 5).trim().split('-');
                const idade1 = parseInt(rangeIdade[0]);
                const idade2 = parseInt(rangeIdade[1]);

                sortedJogadores = arrJogadores.filter(
                    jogador => jogador.idade >= idade1 && jogador.idade <= idade2
                );

                if (checkGols || checkFinal) {
                    sortedJogadores = verficarCheckBox(sortedJogadores, checkGols, checkFinal);
                }
            }

            console.log(sortedJogadores);
            setJogadores(sortedJogadores);
        }
    }, [filter, sorter, checkGols, checkFinal]);

    const fezGol = (jogadores) => {
        return jogadores.filter(
            jogador => jogador.gols > 0
        );
    }

    const jogouFinal = (jogadores) => {
        return jogadores.filter(
            jogador => jogador.final === 'sim'
        );
    }

    const verficarCheckBox = (sortingJogadores, gols, final) => {
        let jogadores = sortingJogadores;

        if (gols) {
            jogadores = fezGol(jogadores);
        }

        if (final) {
            jogadores = jogouFinal(jogadores)
        }
        return jogadores;
    }

    const handleFilter = (value) => {
        setFilter(value);
    };

    const handleSorting = (value) => {
        setSorter(value);
    };

    return (
        <>
            <Main>
                <Banner />
                <section id="menu">
                    <div className="menu-box">
                        <div className="selects">
                            <div className="select-wrapper">
                                <Dropdown onChange={e => handleFilter(e.target.value)}>
                                    <Option>Todos as posições</Option>
                                    {posicoes.map(posicao => {
                                        return <Option>{posicao}</Option>;
                                    })}
                                </Dropdown>
                            </div>
                            <div className="select-wrapper">
                                <Dropdown onChange={e => handleSorting(e.target.value)}>
                                    <Option>Todas as idades</Option>
                                    {idades.map(idade => {
                                        return <Option>{idade} anos</Option>;
                                    })}
                                </Dropdown>
                            </div>
                        </div>
                        <div className="checkbox-wrapper">
                            <div className="check-gols">
                                <Checkbox label="Somente quem marcou gol"
                                    value={checkGols}
                                    checked={checkGols}
                                    onChange={({ target }) => setGols(target.checked)} />
                            </div>
                            <div className="check-final">
                                <Checkbox label="Somente quem jogou na final"
                                    value={checkFinal}
                                    checked={checkFinal}
                                    onChange={({ target }) => setFinal(target.checked)} />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="grid-section">
                    <div className='grid-container'>
                        {jogadores.map(jogador => {
                            return <Card jogador={jogador} />
                        })}
                    </div>
                </section>
            </Main>
        </>
    );
}

export default Home;