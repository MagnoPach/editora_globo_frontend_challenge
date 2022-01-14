import styled from 'styled-components';
import setaBaixoIcon from '../../assets/icones/seta-baixo.svg'

export const Main = styled.main`
    #menu {
        width: 100%;
        height: 80px;
        border-bottom: 12px solid #006437;
        display: flex;
        justify-content: center;
        align-items: center;

        .menu-box {
            width: 878px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .selects {
                width: 621px;
                display: flex;
                justify-content: space-between;
                align-items: center;

            }
        }
    }


`

export const Dropdown = styled.select`
    & {
        width: 300px;
        height: 50px;
        padding: 16px 20px;
        border-radius: 5px;
        background: #B4DDC1 url(${setaBaixoIcon}) 92.5% 50% no-repeat;
        background-size: 15px;
        color: #006437;
        font-style: italic;

        -webkit-appearance: none;
        -moz-appearance:    none;
        appearance:         none;
    }

    &:hover {
        outline: 1px solid #006437;
    }
`

export const Option = styled.option`
    
    & {
        background-color: #FFFFFF;
        line-height: 50px;
        min-height: 50px;
        font-size: 15px;
        color: black;
    }

    &:hover, &.focus, &.selected.focus {
        background-color: #E0EFE5;
    }
`