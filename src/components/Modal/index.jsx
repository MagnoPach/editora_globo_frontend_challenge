import { Container, CloseModalButton, StepButton } from './styles';

import ExpandedCard from '../ExpandedCard'

import rightArrow from '../../assets/icones/seta-direita.svg'
import lefttArrow from '../../assets/icones/seta-esquerda.svg'

const Modal = ({ showModal, setShowModal, index, jogadores }) => {
    return (
        <>
            {showModal ? (
                <Container>
                    <div className="expCard-container">
                        <ExpandedCard jogador={jogadores[index]} />
                        <button className="close-buttom" onClick={() => setShowModal(prev => !prev)}>
                            <CloseModalButton />
                        </button>
                        <div className="steps-buttons">
                            <button>
                                <StepButton>
                                    <div className="arrow-before">
                                        <img src={lefttArrow} />
                                    </div>
                                    <p>Anterior</p>
                                </StepButton>
                            </button>
                            <button>
                                <StepButton>
                                    <div className="arrow-after">
                                        <img src={rightArrow} />
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