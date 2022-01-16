import styled from 'styled-components';

import closeIcon from '../../assets/icones/fechar.svg'
import closeHoverIcon from '../../assets/icones/fechar-hover.svg'


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #006437CC;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    .expCard-container {
        position: relative;

        .close-buttom {
            position: absolute;
            top: 6px;
            right: 6px;
            border-radius: 50%;
            cursor: pointer;
        }

        .steps-buttons {
            width: 220px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: absolute;
            bottom: 16px;
            left: 68px;

            button {
                border-radius: 14px;
                cursor: pointer;
            }
        }
    }
    
`

export const CloseModalButton = styled.div`
    && {
        width: 20px;
        height: 20px;
        background: url(${closeIcon});

        &&:hover {
            background: url(${closeHoverIcon});
        }
    }
`

export const StepButton = styled.div`
    & {
        width: 100px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #B4DDC1;
        border-radius: 14px;
        position: relative;

        &:hover {
            outline: 2px solid #006437;
        }

        div {
            width: 8px;
        }

        .arrow-before {
            position: absolute;
            top: 8px;
            left: 8px;
        }

        .arrow-after {
            position: absolute;
            top: 8px;
            right: 8px;
        }

        p {
            color: #006437;
        }
        
    }
`