import { useState, useEffect } from 'react';
import { Main, Dropdown, Option } from './styles';

import Banner from '../../components/Banner';

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
                        <div>
                            <div>
                                <input type="checkbox" id="gol" />
                                <label htmlFor="gol">Somente quem marcou gol</label>
                            </div>
                            <div>
                                <input type="checkbox" id="jogou-final" />
                                <label htmlFor="jogou-final">Somente quem jogou na final</label>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="grid-section">
                    <div className='grid-container'>

                    </div>
                </section>
            </Main>
        </>
    );
}

export default Home;