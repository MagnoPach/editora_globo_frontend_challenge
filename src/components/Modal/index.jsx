import { useState, useEffect } from 'react';
import { Container, CloseModalButton, StepButton } from './styles';

import ExpandedCard from '../ExpandedCard';
import ExpandedCardMobile from '../ExpandedCardMobile';

import useWindowSize from '../../Hooks/useWindowSize';

import rightArrow from '../../assets/icones/seta-direita.svg';
import lefttArrow from '../../assets/icones/seta-esquerda.svg';

const Modal = ({ showModal, setShowModal, index, jogadores }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setActiveIndex(0);
        let jogadorIndex = index;
        setActiveIndex(jogadorIndex);
    }, [index]);

    const handleLeftArrowClick = () => {
        if (!(activeIndex <= 0)) {
            setActiveIndex(activeIndex - 1);
        }
    };

    const handleRightArrowClick = () => {
        if (!(activeIndex >= jogadores.length - 1)) {
            setActiveIndex(activeIndex + 1);
        }
    };

    const windowSize = useWindowSize();
    console.log(windowSize.width);

    return (
        <>
            {showModal ? (
                <Container>
                    <div className="expCard-container">
                        {windowSize.width > 600 ? (
                            <ExpandedCard jogador={jogadores[activeIndex]} />
                        ) : (
                            <ExpandedCardMobile jogador={jogadores[activeIndex]} />
                        )}
                        <button className="close-buttom" onClick={() => setShowModal(prev => !prev, setActiveIndex(0))}>
                            <CloseModalButton />
                        </button>
                        <div className="steps-buttons">
                            <button onClick={handleLeftArrowClick}>
                                <StepButton>
                                    <div className="arrow-before">
                                        <img src={lefttArrow} alt="Arrow Left" />
                                    </div>
                                    <p>Anterior</p>
                                </StepButton>
                            </button>
                            <button onClick={handleRightArrowClick}>
                                <StepButton>
                                    <div className="arrow-after">
                                        <img src={rightArrow} alt="Arrow Right" />
                                    </div>
                                    <p>Próximo</p>
                                </StepButton>
                            </button>
                        </div>
                    </div>
                </Container>
            ) : null}
        </>
    );
}

export default Modal;